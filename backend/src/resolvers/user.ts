import { User } from "../entities/User";
import { MyContext } from "src/types";
import {Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver} from "type-graphql";
import argon2 from "argon2"

@InputType()
class UsernamePasswordInput {
    @Field()
    username: string
    @Field()
    password: string
}

@ObjectType()
class FieldError {
    // Something is wrong with field (e.g. username, email, etc.)
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => User, {nullable: true})
    user?: User;
}

@Resolver()
export class UserResolver {
    @Mutation(() => UserResponse)
    async register(
        @Arg("options") options: UsernamePasswordInput,
        @Ctx() {manager, req}: MyContext
    ) {
        if (options.username.length <= 2) {
            return {
                errors: [{
                    field: "username",
                    message: "Username must be at least 3 characters long"
                }]
            }
        }
        if (options.password.length <= 6) {
            return {
                errors: [{
                    field: "password",
                    message: "Password must be at least 7 characters long"
                }]
            }
        }
        const hashedPass = await argon2.hash(options.password);
        const user = manager.create(User, {
            username: options.username,
            password: hashedPass
        });
        try {
        await manager.save(user);
        } catch (err) {
            if (err.code === "23505") {
                // duplicate username
                return {
                    errors: [{
                        field: "username",
                        message: "Username already taken"
                    }]
                }
            }
            return {
                errors: [{
                    field: "username",
                    message: "an error has occured"
                }]
            }
        }

        // set logged in cookie
        req.session.userId = user.id;
        return {user};
    }

    @Query(() => UserResponse)
    async login(
        @Arg("options") options: UsernamePasswordInput,
        @Ctx() {manager, req}: MyContext
    ) {
        // Check username
        const user = await manager.findOne(User, {where: {username: options.username}});
        if (!user) {
            return {
                errors: [{
                    field: "username",
                    message: "Username does not exist"
                }]
            }
        }
        // Check password
        const validPass = await argon2.verify(user.password, options.password);
        if (!validPass) {
            return {
                errors: [{
                    field: "password",
                    message: "Incorrect password"
                }]
            }
        }

        // set logged in cookie
        req.session.userId = user.id;

        return {user};
    }

    @Query(() => User, {nullable: true})
    async me(
        @Ctx() {manager, req}: MyContext
    ) {
        if (!req.session.userId) {
            // Not logged in
            return null;
        }

        const user = await manager.findOne(User, {where: {id: req.session.userId}});
        return user;
    }
}
import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import {Arg, Ctx, Query, Resolver, Mutation} from "type-graphql";

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(@Ctx() ctx: MyContext): Promise<Post[]> {
        return ctx.manager.find(Post);
    }

    @Query(() => Post, {nullable: true})
    post(
        @Arg("id") id: number,
        @Ctx() ctx: MyContext
    ): Promise<Post | null> {
        return ctx.manager.findOne(Post, {where: {"id": id}});
    }

    @Mutation(() => Post)
    async createPost(
        @Arg("title") title: string,
        @Ctx() ctx: MyContext
    ): Promise<Post> {
        const post = ctx.manager.create(Post, {title});
        await ctx.manager.save(post);
        return post;
    }

    @Mutation(() => Post, {nullable: true})
    async updatePost(
        @Arg("id") id: number,
        @Arg("title") title: string,
        @Ctx() ctx: MyContext,
    ): Promise<Post | null> {
        const post = await ctx.manager.findOne(Post, {where: {"id": id}});
        if (post === null) {
            return post;
        }
        if (typeof title !== "undefined") {
            post.title = title;
            post.updatedAt = new Date();
            await ctx.manager.save(post);
        }
        return post;
    }

    @Mutation(() => Boolean)
    async deletePost(
        @Arg("id") id: number,
        @Ctx() ctx: MyContext,
    ): Promise<boolean> {
        await ctx.manager.delete(Post, {"id": id});
        return true;
    }
}
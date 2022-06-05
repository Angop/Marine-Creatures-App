import { Arg, Mutation, Resolver } from "type-graphql";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { finished } from "stream/promises";

@Resolver()
export class FileUploadResolver {
  @Mutation(() => Boolean)
  async singleUpload(
    @Arg("image", () => GraphQLUpload) { createReadStream, filename }: FileUpload
  ) {
    const out = require("fs").createWriteStream(`./temp/${filename}`);
    // run inference and save
    createReadStream().pipe(out);
    await finished(out);
    return true;
  }
}

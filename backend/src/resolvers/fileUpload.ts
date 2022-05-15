import { Arg, Mutation, Resolver } from "type-graphql";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { finished } from "stream/promises";

@Resolver()
export class FileUploadResolver {
  @Mutation(() => Boolean)
  async singleUpload(
    @Arg("file", () => GraphQLUpload) { createReadStream, filename }: FileUpload
  ) {
    const out = require("fs").createWriteStream(`./temp/${filename}`);
    createReadStream().pipe(out);
    await finished(out);
    return true;
  }
}

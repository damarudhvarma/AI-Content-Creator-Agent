"use server"

import { currentUser } from "@clerk/nextjs/server"
import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apikey= process.env.SCHEMATIC_SECRET;
if(!apikey){
    throw new Error('Missing Schematic API key');
}
const client = new SchematicClient({
    apiKey: apikey

});
export async function getTemporaryAccessToken() {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    const res =await client.accesstokens.issueTemporaryAccessToken({
        resourceType:'company',
        lookup:{
            id:user.id
        }
    })
    return res.data.token;
}
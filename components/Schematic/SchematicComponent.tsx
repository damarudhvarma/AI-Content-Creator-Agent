
import SchematicEmbeded from "./SchematicEmbeded"
import { getTemporaryAccessToken } from "@/actions/getTemporaryAccessToken"


async function SchematicComponent({componentId}:{componentId:string}){
    if(!componentId){
       return null;
    }
  const accessToken = await getTemporaryAccessToken() ;
    if(!accessToken){
        throw new Error('Failed to get access token');
    }

return <SchematicEmbeded accessToken={accessToken} componentId={componentId} />

}

export default SchematicComponent
"use client"
import { SchematicEmbed } from "@schematichq/schematic-components"
const SchematicEmbeded = ({
    accessToken,
    componentId
}:{
    accessToken:string,
    componentId:string
} 

) => {
  

  return (
    <SchematicEmbed accessToken={accessToken} id={componentId} />
  )
}

export default SchematicEmbeded
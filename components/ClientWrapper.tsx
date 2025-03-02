"use client"

import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapper from "./SchematicWrapper";
import { ConvexClientProvider } from "./ConvexClientProvider";
export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schematicPubkey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBKEY;
  if (!schematicPubkey) {
    throw new Error("Missing NEXT_PUBLIC_SCHEMATIC_PUBKEY");
  }
  return (
      <ConvexClientProvider>
        <SchematicProvider publishableKey={schematicPubkey}>
          <SchematicWrapper>
       {children}
          </SchematicWrapper>
        </SchematicProvider>
      </ConvexClientProvider> 
  )
}

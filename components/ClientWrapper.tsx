"use client"
import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapper from "./SchematicWrapper";
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
      <ClerkProvider>
        <SchematicProvider publishableKey={schematicPubkey}>
          <SchematicWrapper>
       {children}
          </SchematicWrapper>
        </SchematicProvider>
      </ClerkProvider> 
  )
}

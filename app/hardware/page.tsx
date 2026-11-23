import { CollectionPage, collections } from "@/components/CollectionPage";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  collections.hardware.title,
  collections.hardware.description,
  "/hardware/",
);
export default function Hardware() {
  return <CollectionPage collection="hardware" />;
}

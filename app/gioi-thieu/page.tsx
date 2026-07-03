import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { aboutUsSeoImage } from "./components/data";
import { GioiThieuContent } from "./components/gioi-thieu-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Về Chuyên Tin — Đội ngũ mentor và câu chuyện ra đời",
  description:
    "Câu chuyện thành lập, đội ngũ mentor luyện thi chuyên Tin và cách Chuyên Tin theo sát tiến độ học sinh mỗi tuần.",
  path: "/gioi-thieu",
  ogImage: aboutUsSeoImage,
});

export default function GioiThieuPage() {
  return <GioiThieuContent />;
}

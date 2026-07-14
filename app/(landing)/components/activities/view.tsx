"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, ZigZag } from "@/components/landing/section-kit";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/ui/safe-image";
import { activitiesData } from "./components/activity-data";

export function ActivitiesSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Hàm khởi chạy bộ đếm thời gian tự động chuyển slide (5 giây)
  const startAutoPlay = React.useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      api?.scrollNext();
    }, 5000);
  }, [api]);

  // Kích hoạt autoplay khi Carousel API đã sẵn sàng
  React.useEffect(() => {
    if (!api) return;
    startAutoPlay();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [api, startAutoPlay]);

  // Xử lý sự kiện click Prev: chuyển slide và reset lại bộ đếm 5s
  const handlePrev = React.useCallback(() => {
    if (!api) return;
    api.scrollPrev();
    startAutoPlay();
  }, [api, startAutoPlay]);

  // Xử lý sự kiện click Next: chuyển slide và reset lại bộ đếm 5s
  const handleNext = React.useCallback(() => {
    if (!api) return;
    api.scrollNext();
    startAutoPlay();
  }, [api, startAutoPlay]);

  return (
    <section
      id="hoat-dong"
      className="px-5 py-20 md:px-8 md:py-24 bg-background text-foreground overflow-hidden"
    >
      <div className="mx-auto max-w-352">
        {/* Split Layout: 12 cột */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Cột trái (chiếm 5/12 cột): Tiêu đề chính + mô tả chung */}
          <Reveal className="lg:col-span-5 flex flex-col justify-center h-full py-2">
            {/* Icon lục giác thương hiệu căn trái */}
            <div className="grid place-items-center size-20 mr-auto mb-4">
              <div className="mini-section-hex grid place-items-center text-brand-deep size-16">
                <ChevronRight className="size-8 text-brand-primary rotate-[-45deg]" />
              </div>
            </div>

            {/* Tiêu đề chính */}
            <h2 className="text-[clamp(2rem,3.4vw,3.25rem)] font-black tracking-[-0.035em] text-brand-deep font-display leading-[1.03]">
              Trải nghiệm các hoạt động ngoại khóa
            </h2>

            {/* Đường răng cưa ZigZag thương hiệu */}
            <ZigZag className="mt-5" />

            {/* Đoạn giới thiệu chung */}
            <p className="text-muted-foreground text-sm md:text-base mt-5 leading-relaxed font-sans">
              Tại Chuyên Tin, học sinh được tiếp cận khoa học thực tiễn để rèn luyện tư duy logic, tính kiên nhẫn và khám phá thế giới xung quanh thông qua các hoạt động thực hành.
            </p>
          </Reveal>

          {/* Cột phải (chiếm 7/12 cột): Carousel ảnh nằm ngang chiếm trọn 100% chiều rộng */}
          <div className="lg:col-span-7 relative w-full">
            <Reveal className="w-full">
              <div className="relative w-full">
                
                {/* Carousel cấu hình hiển thị 1 slide duy nhất */}
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="ml-0">
                    {activitiesData.map((item) => (
                      <CarouselItem
                        key={item.id}
                        className="basis-full pl-0"
                      >
                        <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-muted border border-border/50 transition-colors duration-300 hover:border-brand-primary/20 shadow-md">
                          <SafeImage
                            src={item.imagePath}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                            priority={false}
                          />

                          {/* Lớp phủ mờ (Glassmorphism Overlay) chứa thông tin hoạt động trực tiếp đè lên ảnh */}
                          <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col text-white pt-16 select-none">
                            {/* Nhãn Category dạng viên thuốc mờ sáng */}
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 text-zinc-100 border border-white/10 font-bold text-[10px] md:text-xs tracking-wider uppercase w-fit font-display backdrop-blur-md">
                              {item.category}
                            </span>

                            {/* Tiêu đề hoạt động */}
                            <h3 className="text-lg md:text-2xl font-black tracking-tight mt-2 text-white font-display">
                              {item.title}
                            </h3>

                            {/* Mô tả chi tiết hoạt động */}
                            <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mt-1.5 max-w-xl font-sans opacity-90">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* Nút Prev nổi mờ sáng đè lên mép trái (đối xứng hoàn hảo) */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 rounded-full size-12 border border-zinc-200/60 bg-white/80 text-zinc-800 backdrop-blur-md shadow-md hover:bg-white hover:text-brand-deep hover:border-zinc-300 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="size-5 stroke-[2.5]" />
                </Button>

                {/* Nút Next nổi mờ sáng đè lên mép phải (đối xứng hoàn hảo) */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 rounded-full size-12 border border-zinc-200/60 bg-white/80 text-zinc-800 backdrop-blur-md shadow-md hover:bg-white hover:text-brand-deep hover:border-zinc-300 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                  onClick={handleNext}
                  aria-label="Next slide"
                >
                  <ChevronRight className="size-5 stroke-[2.5]" />
                </Button>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;

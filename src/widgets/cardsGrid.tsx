"use client"

import { Card } from "@/entities/card/ui/card"
import { useImages } from "@/entities/images/model/useImages"

export function CardsGrid() {
    const { images, isImagesLoading } = useImages()

    return (
        <section className="container-fluid px-4 sm:px-10 my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {isImagesLoading ? (
                <div className="mt-3 col-span-full">
                <span>Загрузка изображений...</span>
                </div>
            ) : images && images.length > 0 ? (
                images.map((image) => (
                <Card key={image.id} imageId={image.id} imageUrl={image.image} />
                ))
            ) : (
                <div className="mt-3 col-span-full">
                <span>Нет изображений в галерее</span>
                </div>
            )}
        </section>
    )
}
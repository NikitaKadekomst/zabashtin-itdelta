"use client"

import { Card } from "@/entities/card/ui/card"
import { useImages } from "@/entities/images/model/useImages"

export function CardsGrid() {
    const { images, isImagesLoading } = useImages()

    return (
        <section className="container-fluid my-5 mx-10 grid grid-cols-3 gap-8">
            {isImagesLoading ? (
                <div className="mt-3 col-span-3">
                    <span>Загрузка изображений...</span>
                </div>
            ) : images && images.length > 0 ? (
                images.map((image) => (
                    <Card key={image.id} imageId={image.id} imageUrl={image.image} />
                ))
            ) : (
                <div className="mt-3 col-span-3">
                    <span>Нет изображений в галерее</span>
                </div>
            )}
        </section>
    )
}
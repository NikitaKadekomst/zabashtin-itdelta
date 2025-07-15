import clsx from 'clsx'
import Image from 'next/image'

interface ButtonProps {
    icon: string
    children: React.ReactNode
    className?: string
}

export function Button({ icon, children, className }: ButtonProps) {
    return (
        <button className={clsx(className, "inline-flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow gap-3")}>
            <Image src={icon} alt="Icon" width={20} height={20} />
            <span>{children}</span>
        </button>
    )
}
import { Button } from "@/shared/ui/button";

export function Contacts() {
    return (
        <div className="contacts flex ml-5 mt-22 items-center w-full">
            <h1 className="flex-1 font-bold text-2xl">Ricardo Cooper</h1>
            <div className="flex gap-3">
                <Button icon="/icons/mail.svg">Message</Button>
                <Button icon="/icons/phone.svg">Call</Button>
            </div>
        </div>
    )
}
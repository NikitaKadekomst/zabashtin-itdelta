import { Button } from "@/shared/ui/button";

export function Contacts() {
    return (
        <div className="contacts flex flex-col sm:flex-row sm:ml-3 sm:mr-3 sm:mt-22 ml-4 mr-4 sm:mr-8 mt-6 items-start sm:items-center w-full gap-3 sm:gap-0">
            <h1 className="flex-1 font-bold text-2xl">Ricardo Cooper</h1>
            <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto sm:gap-3">
                <Button className="w-full sm:w-auto" icon="/icons/mail.svg">Message</Button>
                <Button className="w-full sm:w-auto" icon="/icons/phone.svg">Call</Button>
            </div>
        </div>
    )
}
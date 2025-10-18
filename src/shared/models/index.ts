import type { LucideProps } from "lucide-react"

export type LinkType = {
    title: string,
    url: string,
    icon:
    React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    | string
}
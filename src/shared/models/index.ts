import type { LucideProps } from "lucide-react"

export type LucideIconType = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>

export type NavLinkType = {
    title: string,
    url: string,
    icon: LucideIconType
}
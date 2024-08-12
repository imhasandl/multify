export interface NewsBannerProps {
   news: any[]
}

export interface ThemeState {
   value: boolean
}

export interface TodoSlicerProps {
	map(arg0: (todo: TodoSlicerProps, index: number) => import("react").JSX.Element): import("react").ReactNode
   title: string
   category: string
   todoText: string
}
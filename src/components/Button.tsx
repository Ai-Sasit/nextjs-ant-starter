import { Button } from 'antd'
import { colorTheme } from '@/constants/color'

interface CustomButtonProps {
    className?: string
    children?: React.ReactNode
    style?: React.CSSProperties
    variant?: 'default' | 'primary' | 'dashed' | 'link' | 'text'
    color?: string
    shape?: 'round' | 'circle' | 'default'
    size?: 'small' | 'middle' | 'large'
    loading?: boolean
    disabled?: boolean
    href?: string
    icon?: React.ReactNode
    onClick?: () => void
}

function CustomButton(props: CustomButtonProps) {
    const computeColor = (color: string) => {
        switch (color) {
            case 'primary':
                return colorTheme.primary
            case 'secondary':
                return colorTheme.secondary
            case 'success':
                return colorTheme.success
            case 'warning':
                return colorTheme.warning
            case 'danger':
                return colorTheme.danger
            case 'info':
                return colorTheme.info
            default:
                return color
        }
    }

    const style = {
        ...props.style,
        backgroundColor: computeColor(props.color || 'primary'),
    }

    return (
        <Button
            className={props.className}
            type={props.variant}
            style={style}
            size={props.size}
            shape={props.shape}
            loading={props.loading}
            href={props.href}
            disabled={props.disabled}
            icon={props.icon}
        >
            {props.children}
        </Button>
    )
}

export default CustomButton

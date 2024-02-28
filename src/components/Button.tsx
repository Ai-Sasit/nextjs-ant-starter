import { colorTheme } from '@/constants/color'
import { Button, ConfigProvider, Dropdown } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'

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
    dropdownItems?: ItemType[]
    dropdownArrow?: boolean
    dropdownPlacement?:
        | 'bottomLeft'
        | 'bottomCenter'
        | 'bottomRight'
        | 'topLeft'
        | 'topCenter'
        | 'topRight'
    fullWidth?: boolean
    onClick?: (...args: any[]) => any
    onDropdownClick?: (...args: any[]) => any
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
    }

    const theme = {
        components: {
            Button: {
                textHoverBg: computeColor(props.color || 'primary') + '1A',
            },
        },
    }

    if (props.variant === 'primary') {
        style.backgroundColor = computeColor(props.color || 'primary')
    } else if (props.variant === 'dashed' || props.variant === 'default') {
        style.borderColor = computeColor(props.color || 'primary')
        style.color = computeColor(props.color || 'primary')
    } else if (props.variant === 'link') {
        style.color = computeColor(props.color || 'primary')
    } else if (props.variant === 'text') {
        style.color = computeColor(props.color || 'primary')
    }

    return (
        <ConfigProvider theme={theme}>
            {props.dropdownItems ? (
                <Dropdown
                    menu={{
                        items: props.dropdownItems,
                        onClick: props.onDropdownClick,
                    }}
                    placement={props.dropdownPlacement}
                    arrow={props.dropdownArrow}
                >
                    <Button
                        className={props.className}
                        type={props.variant}
                        style={style}
                        size={props.size}
                        shape={props.shape}
                        loading={props.loading}
                        href={props.href}
                        disabled={props.disabled}
                        block={props.fullWidth}
                        onClick={props.onClick}
                        icon={props.icon}
                    >
                        {props.children}
                    </Button>
                </Dropdown>
            ) : (
                <Button
                    className={props.className}
                    type={props.variant}
                    style={style}
                    size={props.size}
                    shape={props.shape}
                    loading={props.loading}
                    href={props.href}
                    disabled={props.disabled}
                    block={props.fullWidth}
                    onClick={props.onClick}
                    icon={props.icon}
                >
                    {props.children}
                </Button>
            )}
        </ConfigProvider>
    )
}

export default CustomButton

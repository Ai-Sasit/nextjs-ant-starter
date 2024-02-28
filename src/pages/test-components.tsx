import Button from '@/components/Button'
import type { MenuProps } from 'antd'

function TestComponent() {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    2nd menu item
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                >
                    3rd menu item
                </a>
            ),
        },
    ]

    return (
        <div className="test-container">
            <h1>Button</h1>
            <div className="btn-section">
                <Button variant="primary" color="primary">
                    Primary
                </Button>
                <Button variant="primary" color="secondary">
                    Secondary
                </Button>
                <Button variant="primary" color="warning">
                    Warning
                </Button>
                <Button variant="primary" color="success">
                    Success
                </Button>
                <Button variant="primary" color="danger">
                    Danger
                </Button>
                <Button variant="primary" color="info">
                    Info
                </Button>
                <Button variant="primary" color="#ffc069">
                    Custom Color
                </Button>
            </div>
            <div className="btn-section">
                <Button variant="dashed" color="primary">
                    Primary
                </Button>
                <Button variant="dashed" color="secondary">
                    Secondary
                </Button>
                <Button variant="dashed" color="warning">
                    Warning
                </Button>
                <Button variant="dashed" color="success">
                    Success
                </Button>
                <Button variant="dashed" color="danger">
                    Danger
                </Button>
                <Button variant="dashed" color="info">
                    Info
                </Button>
                <Button variant="dashed" color="#ffc069">
                    Custom Color
                </Button>
            </div>
            <div className="btn-section">
                <Button variant="default" color="primary">
                    Primary
                </Button>
                <Button variant="default" color="secondary">
                    Secondary
                </Button>
                <Button variant="default" color="warning">
                    Warning
                </Button>
                <Button variant="default" color="success">
                    Success
                </Button>
                <Button variant="default" color="danger">
                    Danger
                </Button>
                <Button variant="default" color="info">
                    Info
                </Button>
                <Button variant="default" color="#ffc069">
                    Custom Color
                </Button>
            </div>
            <div className="btn-section">
                <Button variant="link" color="primary">
                    Primary
                </Button>
                <Button variant="link" color="secondary">
                    Secondary
                </Button>
                <Button variant="link" color="warning">
                    Warning
                </Button>
                <Button variant="link" color="success">
                    Success
                </Button>
                <Button variant="link" color="danger">
                    Danger
                </Button>
                <Button variant="link" color="info">
                    Info
                </Button>
                <Button variant="link" color="#ffc069">
                    Custom Color
                </Button>
            </div>
            <div className="btn-section">
                <Button variant="text" color="primary">
                    Primary
                </Button>
                <Button variant="text" color="secondary">
                    Secondary
                </Button>
                <Button variant="text" color="warning">
                    Warning
                </Button>
                <Button variant="text" color="success">
                    Success
                </Button>
                <Button variant="text" color="danger">
                    Danger
                </Button>
                <Button variant="text" color="info">
                    Info
                </Button>
                <Button variant="text" color="#ffc069">
                    Custom Color
                </Button>
            </div>
            <h1 style={{ marginTop: '2rem' }}>Dropdown</h1>
            <div className="btn-section">
                <Button variant="default" color="primary" dropdownItems={items}>
                    default
                </Button>
                <Button
                    variant="default"
                    color="primary"
                    dropdownItems={items}
                    dropdownArrow
                >
                    Arrow
                </Button>
                <Button
                    variant="default"
                    color="primary"
                    dropdownItems={items}
                    dropdownArrow
                    dropdownPlacement="topLeft"
                >
                    placement
                </Button>
            </div>
        </div>
    )
}

export default TestComponent

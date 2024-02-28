import Button from '@/components/Button'
function TestComponent() {
    return (
        <div className="test-container">
            <h1>Test Component</h1>
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
        </div>
    )
}

export default TestComponent

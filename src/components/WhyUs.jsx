export default function WhyUs() {
    return (
        <>
            <div className="py-5">
                <h2 className="text-center mb-5 fw-800" style={{fontsize: "2.5rem"}}>Why choose Vivexaflix?</h2>
                <div className="row g-4">
                    <div className="col-md-3">
                        <div className="reason-card">
                            <h3>Smart TV Experience</h3>
                            <p>Optimized for 4K streaming on all major smart TV brands.</p>
                            <span className="reason-icon">📺</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="reason-card">
                            <h3>Offline Access</h3>
                            <p>Download in high-quality and watch while you travel.</p>
                            <span className="reason-icon">📥</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="reason-card">
                            <h3>Unlimited Sync</h3>
                            <p>Start on your phone, finish on your laptop seamlessly.</p>
                            <span className="reason-icon">📱</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="reason-card">
                            <h3>Family Safety</h3>
                            <p>Advanced parental controls and dedicated kids profiles.</p>
                            <span className="reason-icon">🛡️</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
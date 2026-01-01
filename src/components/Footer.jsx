export default function Footer() {
    return (
        <>
    <footer>
        <div className="container-fluid">
            <div className="row gy-4 text-center text-md-start">
                <div className="col-md-6 col-lg-4">
                    <h4 className="brand-text">Vivexa Flix</h4>
                    <p className="small text-secondary">Premium cinematic experiences delivered to your favorite devices.
                    </p>
                </div>
                <div className="col-6 col-lg-2">
                    <h6 className="small fw-bold">Company</h6>
                    <nav className="nav flex-column">
                        <a href="#" className="nav-link p-0 text-secondary small">About</a>
                        <a href="#" className="nav-link p-0 text-secondary small">Careers</a>
                    </nav>
                </div>
                <div className="col-6 col-lg-2">
                    <h6 className="small fw-bold">Social</h6>
                    <nav className="nav flex-column">
                        <a href="#" className="nav-link p-0 text-secondary small">Twitter</a>
                        <a href="#" className="nav-link p-0 text-secondary small">Instagram</a>
                    </nav>
                </div>
            </div>
            <hr className="my-4 opacity-10"/>
            <p className="text-center small text-secondary">© 2026 Vivexa Flix. All rights reserved. Powered By Vivexa Tech</p>
        </div>
    </footer>
        </>
    )
}
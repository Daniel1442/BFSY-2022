import React from "react";
import getApplicationConfig from "../../../../application.config";



export default function Footer() {
    const {appVersion} = getApplicationConfig().parameters
    return (
        <>
            <footer className="py-2 border-top mt-0 text-center bg-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md">
                            <small className="d-block text-muted">Verze
                                č.{appVersion}</small>
                            <small className="d-block text-muted">Copyright © {new Date().getFullYear()}</small>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

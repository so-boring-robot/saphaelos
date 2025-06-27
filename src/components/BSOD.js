import { useRef, useEffect } from "react"
function BSOD({updateBSOD}){
    const bsodRef =  useRef(null)
    useEffect(() => {
        if (bsodRef.current) {
            bsodRef.current.focus()
        }
        }, [])
    return(
        <div ref={bsodRef} tabIndex={0} id="bsod" className="fixed inset-0 bg-[#0000AA] text-white font-mono text-sm z-50 p-8" onKeyDown={() => updateBSOD(false)}>
        <p className="mb-4">
            Une exception fatale 0E s'est produite à 0028:C0011E36 dans VXD VMM(01) + 00010E36.<br/>
            L'application en cours sera arrêtée.
        </p>
        <p className="mb-2">* Appuyez sur n’importe quelle touche pour redémarrer votre ordinateur.</p>
        <p className="text-xs text-right mt-16">Windows 95™</p>
        </div>
    )
}

export default BSOD
import Script from "next/script";

const FORM_ID = "61iIYgpvcfo22fkrMxDX";

export default function LeadConnectorForm() {
  return (
    <div className="leadconnector-form">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "646px", border: "none", borderRadius: "8px" }}
        id={`inline-${FORM_ID}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Forms - Modelo A Português"
        data-height="646"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Forms - Modelo A Português"
        loading="lazy"
      />
      <Script
        id="leadconnector-form-embed"
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}

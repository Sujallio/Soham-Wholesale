export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';

export const PHONE_NUMBER =
  process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91 99999 99999';

export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'hello@sohamgarment.com';

export function whatsappUrl(message) {
  const encoded = encodeURIComponent(message || '');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsApp(message) {
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  }
}

export function buildEnquiryMessage({ items, form = {} }) {
  const lines = items.map(
    (item, idx) =>
      `${idx + 1}. ${item.name} — ${item.code} — Qty: ${item.quantity}`
  );

  const detail = (label, value) =>
    value && value.trim() ? `${label}: ${value.trim()}` : null;

  const retailer = [
    detail('Name', form.name),
    detail('Business', form.business),
    detail('Mobile', form.mobile),
    detail('WhatsApp', form.whatsapp),
    detail('City', form.city),
    detail('State', form.state),
  ]
    .filter(Boolean)
    .join('\n');

  const message = `Hello Soham Garment,

I am interested in the following products:

${lines.join('\n')}

Retailer Details:
${retailer || '(no details provided)'}

${form.message ? `Message: ${form.message}\n` : ''}Please share wholesale pricing and availability.

Thank you.`;

  return message;
}

export function buildQuickEnquiry(product) {
  return `Hello Soham Garment,

I am interested in this product:

${product.name} — ${product.code}

Please share wholesale pricing and availability.

Thank you.`;
}

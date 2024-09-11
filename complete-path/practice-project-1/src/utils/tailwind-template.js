export default function tw(strings, ...values) {
  return String.raw({ raw: strings }, ...values);
}

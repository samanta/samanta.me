import ButtonInput from "./ButtonInput";

export default function NewsletterForm() {
  return (
    <form
      action="https://app.convertkit.com/forms/1911630/subscriptions"
      method="post"
      target="_blank"
      data-sv-form="1911630"
    >
      {/* <input
        type="text"
        name="fields[first_name]"
        placeholder="Your first name"
        aria-label="First name"
        id="ck-first-name"
      /> */}
      <ButtonInput
        name="email_address"
        inputType="email"
        buttonType="submit"
        placeholder="Enter your email"
        aria-label="Enter your email"
        buttonText="Subscribe"
        required={true}
      />
    </form>
  );
}

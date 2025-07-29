import { ResponsiveWrapper } from "@/custom_components/ResponsiveWrapper";
import { ContactForm } from "@/components/forms/ContactForm";
import { RenderContactListByCategory } from "@/custom_components/renderContactListByCategory";
import { publicApiRequest } from "@/data/services/apiRequest";
import qs from "qs";

const ContactPage = async () => {
  const query = qs.stringify({
    populate: {
      contacts: {
        populate: "*",
      },
    },
  });

  const contactPageData = await publicApiRequest({
    path: `contact-page?${query}`,
    method: "GET",
  });

  const { title, contacts } = contactPageData?.data;

  return (
    <section className="relative -mt-[60px] z-10 h-full">
      <ResponsiveWrapper className="pt-16 pb-4 sm:pb-8">
        <div className="grid md:grid-cols-2 gap-16 h-full">
          <article>
            <h1 className="md:text-[62px] text-3xl font-accent">{title}</h1>
            <div className="pt-12 md:pt-24 grid gap-y-6">
              <p className="text-xl">Not into form? Talk to us here instead:</p>
              <ul className="space-y-2 text-base font-ui">
                {RenderContactListByCategory(contacts, "tel-mail")}
                <li>
                  <ul className="flex gap-4">
                    {RenderContactListByCategory(contacts, "social")}
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <ContactForm />
        </div>
      </ResponsiveWrapper>
    </section>
  );
};

export default ContactPage;

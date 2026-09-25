import { Metadata } from "next";
import Link from "next/link";
import {
  LegalHero,
  LegalPageBody,
  LegalTableOfContents,
  LegalSection,
} from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | AST Abroad Study & Travel",
  description:
    "Read the AST Abroad Study and Travel privacy policy to learn how we collect, use, and protect your personal information.",
};

const LAST_UPDATED = "September 25, 2026";

const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Your Information" },
  { id: "cookies", label: "Cookies & Tracking Technologies" },
  { id: "sharing-information", label: "How We Share Information" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights & Choices" },
  { id: "children", label: "Students Under 18" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact-us", label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-slate-800">
      <LegalHero title="Privacy Policy" lastUpdated={LAST_UPDATED} />

      <LegalPageBody>
        <LegalTableOfContents items={SECTIONS} />

        <LegalSection id="introduction" title="1. Introduction">
          <p>
            AST (Abroad Study and Travel) (&quot;AST&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) is an overseas education and
            travel consultancy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website, book a free consultation, or use any of our counselling,
            university placement, visa assistance, or travel support services.
          </p>
          <p>
            By using our website or engaging our services, you agree to the
            collection and use of information in accordance with this policy.
            If you do not agree, please do not use our website or services.
          </p>
        </LegalSection>

        <LegalSection
          id="information-we-collect"
          title="2. Information We Collect"
        >
          <p>
            <strong>Information you provide directly</strong>, such as when
            you book a consultation, submit a contact form, or speak with one
            of our counsellors:
          </p>
          <ul>
            <li>Full name, email address, and phone number</li>
            <li>
              Preferred study destination, study level (undergraduate,
              postgraduate, etc.), and course or field of interest
            </li>
            <li>Preferred consultation date and time</li>
            <li>Messages, questions, or additional details you share with us</li>
            <li>
              Academic records, passport and identification details,
              financial documents, and other supporting documents you submit
              during university applications or visa processing
            </li>
          </ul>
          <p>
            <strong>Information collected automatically</strong> when you
            browse our website:
          </p>
          <ul>
            <li>IP address, browser type, and device information</li>
            <li>Pages visited, time spent on the site, and referring pages</li>
            <li>
              General location information inferred from your IP address
            </li>
          </ul>
        </LegalSection>

        <LegalSection
          id="how-we-use-information"
          title="3. How We Use Your Information"
        >
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to consultation bookings and enquiries</li>
            <li>
              Provide counselling, university selection, application, visa,
              accommodation, and travel support services
            </li>
            <li>
              Prepare and submit applications to partner universities and
              relevant immigration authorities on your behalf, with your
              consent
            </li>
            <li>
              Communicate with you about your application status, upcoming
              appointments, and important updates
            </li>
            <li>
              Improve our website, services, and understand how visitors use
              our site
            </li>
            <li>Comply with legal obligations and protect against fraud</li>
          </ul>
        </LegalSection>

        <LegalSection id="cookies" title="4. Cookies & Tracking Technologies">
          <p>
            Our website may use cookies and similar technologies to remember
            your preferences and understand how visitors interact with our
            site. You can control or disable cookies through your browser
            settings; however, doing so may affect certain features of the
            website.
          </p>
        </LegalSection>

        <LegalSection
          id="sharing-information"
          title="5. How We Share Information"
        >
          <p>
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul>
            <li>
              Partner universities and institutions, solely to process your
              application and admission
            </li>
            <li>
              Visa, immigration, and embassy authorities, where required to
              process your visa application
            </li>
            <li>
              Trusted service providers who assist us with travel bookings,
              accommodation arrangements, and IT or communication services,
              bound by confidentiality obligations
            </li>
            <li>
              Authorities where disclosure is required by law or to protect
              the rights, property, or safety of AST, our students, or others
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="data-security" title="6. Data Security">
          <p>
            We use reasonable administrative, technical, and physical
            safeguards designed to protect your personal information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no method of transmission or storage is 100% secure, and
            we cannot guarantee absolute security.
          </p>
        </LegalSection>

        <LegalSection id="data-retention" title="7. Data Retention">
          <p>
            We retain personal information for as long as necessary to
            provide our services, maintain accurate academic and immigration
            records, comply with legal or regulatory obligations, and resolve
            disputes. When information is no longer needed, we take
            reasonable steps to delete or anonymize it.
          </p>
        </LegalSection>

        <LegalSection id="your-rights" title="8. Your Rights & Choices">
          <p>You may contact us at any time to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information, subject to legal or contractual retention requirements</li>
            <li>Withdraw consent to marketing communications</li>
          </ul>
          <p>
            To exercise any of these rights, please reach out using the
            contact details in the{" "}
            <a href="#contact-us">Contact Us</a> section below.
          </p>
        </LegalSection>

        <LegalSection id="children" title="9. Students Under 18">
          <p>
            Many prospective students we assist are under the age of 18. Where
            a student is a minor, we require the involvement, consent, and
            supporting documentation of a parent or legal guardian before
            proceeding with counselling, applications, or visa processing on
            the student&apos;s behalf.
          </p>
        </LegalSection>

        <LegalSection id="third-party-links" title="10. Third-Party Links">
          <p>
            Our website may contain links to third-party websites, including
            partner universities and social media platforms. We are not
            responsible for the privacy practices or content of those
            third-party sites. We encourage you to review their privacy
            policies before providing any personal information.
          </p>
        </LegalSection>

        <LegalSection
          id="international-transfers"
          title="11. International Data Transfers"
        >
          <p>
            As part of arranging overseas education and travel, your
            information may be transferred to, and processed in, countries
            outside your country of residence, including the destination
            country of your chosen university. We take reasonable steps to
            ensure such transfers are handled securely and only as necessary
            to provide our services.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal, operational, or regulatory
            reasons. The updated policy will be posted on this page with a
            revised &quot;Last updated&quot; date.
          </p>
        </LegalSection>

        <LegalSection id="contact-us" title="13. Contact Us">
          <p>
            If you have any questions about this Privacy Policy or how we
            handle your personal information, please contact us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:info@astabroadstudy.com">
                info@astabroadstudy.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+94760344695">+94 76 034 4695</a>
            </li>
            <li>Address: 123 Education Boulevard, Colombo, Sri Lanka</li>
          </ul>
          <p>
            You may also reach us through our{" "}
            <Link href="/contact">Contact page</Link>.
          </p>
        </LegalSection>
      </LegalPageBody>
    </div>
  );
}

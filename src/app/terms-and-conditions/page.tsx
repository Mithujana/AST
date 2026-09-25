import { Metadata } from "next";
import Link from "next/link";
import {
  LegalHero,
  LegalPageBody,
  LegalTableOfContents,
  LegalSection,
} from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Terms & Conditions | AST Abroad Study & Travel",
  description:
    "Read the terms and conditions governing your use of the AST Abroad Study and Travel website and our overseas education and travel consultancy services.",
};

const LAST_UPDATED = "September 25, 2026";

const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "our-services", label: "Our Services" },
  { id: "eligibility", label: "Eligibility & Consultations" },
  { id: "your-responsibilities", label: "Your Responsibilities" },
  { id: "fees-and-payments", label: "Fees & Payments" },
  { id: "no-guarantee", label: "No Guarantee of Outcome" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "third-party-services", label: "Third-Party Services & Links" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "termination", label: "Termination of Services" },
  { id: "governing-law", label: "Governing Law & Disputes" },
  { id: "changes", label: "Changes to These Terms" },
  { id: "contact-us", label: "Contact Us" },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white text-slate-800">
      <LegalHero title="Terms & Conditions" lastUpdated={LAST_UPDATED} />

      <LegalPageBody>
        <LegalTableOfContents items={SECTIONS} />

        <LegalSection id="introduction" title="1. Introduction">
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your
            access to and use of the AST (Abroad Study and Travel)
            (&quot;AST&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) website and our overseas education counselling,
            university placement, visa assistance, accommodation, and travel
            support services (together, the &quot;Services&quot;).
          </p>
          <p>
            By accessing our website, booking a consultation, or engaging our
            Services, you agree to be bound by these Terms. If you do not
            agree, please do not use our website or Services. Where a student
            is under 18, these Terms must be accepted by a parent or legal
            guardian on the student&apos;s behalf.
          </p>
        </LegalSection>

        <LegalSection id="our-services" title="2. Our Services">
          <p>
            AST provides guidance and support across the overseas education
            journey, including but not limited to: academic counselling,
            university and course selection, application assistance, visa and
            immigration guidance, travel and flight support, accommodation
            guidance, and pre-departure briefings. The specific scope of
            services for each student may be confirmed separately through a
            service agreement or consultation.
          </p>
        </LegalSection>

        <LegalSection
          id="eligibility"
          title="3. Eligibility & Consultations"
        >
          <p>
            Our free consultation booking and enquiry forms are provided for
            genuine prospective students, parents, and guardians seeking
            overseas education guidance. You agree to provide accurate,
            current, and complete information when booking a consultation or
            submitting an enquiry.
          </p>
        </LegalSection>

        <LegalSection
          id="your-responsibilities"
          title="4. Your Responsibilities"
        >
          <p>As a student or applicant working with AST, you agree to:</p>
          <ul>
            <li>
              Provide accurate and truthful academic, personal, and financial
              information and documentation
            </li>
            <li>
              Submit required documents within the timelines communicated by
              our counsellors, as university and visa deadlines are often
              strict
            </li>
            <li>
              Attend scheduled consultations, interviews, or appointments, or
              provide reasonable notice if you are unable to attend
            </li>
            <li>
              Comply with the rules, policies, and requirements of
              universities, immigration authorities, and other third parties
              involved in your application
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="fees-and-payments" title="5. Fees & Payments">
          <p>
            Initial consultations booked through our website are provided
            free of charge. Certain services, such as detailed application
            processing, visa filing support, or premium services, may be
            subject to service fees, which will be communicated to you
            clearly before you are asked to make any payment. Any applicable
            university tuition, visa, travel, or accommodation costs are
            separate from and in addition to any AST service fees, and are
            payable directly to the relevant institution or provider unless
            otherwise agreed.
          </p>
        </LegalSection>

        <LegalSection id="no-guarantee" title="6. No Guarantee of Outcome">
          <p>
            AST acts as an education and travel consultancy that facilitates
            and supports your application process. While we strive to provide
            expert, high-quality guidance, decisions regarding admissions,
            scholarships, and visa approvals are made solely at the discretion
            of the relevant universities, institutions, and government or
            immigration authorities. AST does not guarantee admission,
            scholarship, visa approval, or any other outcome.
          </p>
        </LegalSection>

        <LegalSection
          id="intellectual-property"
          title="7. Intellectual Property"
        >
          <p>
            All content on our website, including text, graphics, logos,
            images, and design, is the property of AST or its licensors and is
            protected by applicable intellectual property laws. You may not
            reproduce, distribute, or create derivative works from our
            content without our prior written consent.
          </p>
        </LegalSection>

        <LegalSection
          id="third-party-services"
          title="8. Third-Party Services & Links"
        >
          <p>
            Our Services may involve coordination with independent third
            parties, including partner universities, visa and immigration
            authorities, airlines, and accommodation providers. AST is not
            responsible for the acts, omissions, policies, fees, or service
            quality of these independent third parties. Our website may also
            contain links to third-party websites provided for convenience;
            we do not endorse and are not responsible for their content or
            practices.
          </p>
        </LegalSection>

        <LegalSection
          id="limitation-of-liability"
          title="9. Limitation of Liability"
        >
          <p>
            To the fullest extent permitted by law, AST shall not be liable
            for any indirect, incidental, special, or consequential damages,
            including loss of admission opportunity, visa refusal, travel
            disruption, or financial loss, arising from your use of our
            website or Services, except where such liability results directly
            from our own negligence, willful misconduct, or breach of a
            service agreement between you and AST.
          </p>
        </LegalSection>

        <LegalSection id="indemnification" title="10. Indemnification">
          <p>
            You agree to indemnify and hold AST harmless from any claims,
            damages, losses, or expenses arising from inaccurate information
            you provide, your breach of these Terms, or your violation of any
            law or third-party rights.
          </p>
        </LegalSection>

        <LegalSection id="termination" title="11. Termination of Services">
          <p>
            AST reserves the right to suspend or discontinue providing
            Services to any individual who provides false information,
            engages in fraudulent or abusive conduct, or breaches these
            Terms. You may also choose to discontinue engaging our Services
            at any time by notifying us.
          </p>
        </LegalSection>

        <LegalSection id="governing-law" title="12. Governing Law & Disputes">
          <p>
            These Terms are governed by the laws of Sri Lanka, without regard
            to conflict of law principles. Any disputes arising from these
            Terms or our Services shall first be attempted to be resolved
            amicably, failing which they shall be subject to the exclusive
            jurisdiction of the courts of Sri Lanka.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="13. Changes to These Terms">
          <p>
            We may update these Terms from time to time to reflect changes in
            our Services or for legal and regulatory reasons. The updated
            Terms will be posted on this page with a revised &quot;Last
            updated&quot; date, and your continued use of our website or
            Services after such changes constitutes acceptance of the revised
            Terms.
          </p>
        </LegalSection>

        <LegalSection id="contact-us" title="14. Contact Us">
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:adhigroupofcompany@gmail.com">
                adhigroupofcompany@gmail.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:+94760344695">+94 76 034 4695</a>
            </li>
            <li>Address: Chankanai East, Chankanai, Jaffna, Sri Lanka</li>
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

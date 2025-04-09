// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">
            Velkommen til min testopgave
          </h1>
          <p className="text-lg mb-8">
            Dette Next.js-projekt er udviklet som en del af en testopgave, hvor
            jeg demonstrerer evner inden for:
          </p>
          <ul className="list-disc list-inside mb-8">
            <li>Headless Wordpress Integration</li>
            <li>Next.js frontend app med router og TailwindCSS</li>
            <li>Simple Github</li>
          </ul>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Opg 1</h2>
          <div className="grid grid-cols-1 gap-8 mb-6">
            <Link
              href="/cases"
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">Kynetic Cases</h3>
              <p className="text-gray-700">
                Se nogle af de projekter, Kynetic har arbejdet på.
              </p>
            </Link>
          </div>
          <p className="text-center text-gray-600">
            Wordpress er hostet hos Simply.com og kan tilgåes via{" "}
            <a href="http://headlesscms.lethskov.dk/" className="text-blue-500">
              headlesscms.lethskov.dk/wp-admin
            </a>
            .<br />
            Her kan der logges ind med følgende credentials: <br />
            Admin: admin <br />
            Password: password
          </p>

          <h3 className="my-6 text-2xl font-bold">
            Authentication og beskyttelse af data
          </h3>
          <p className="text-gray-700 mb-4">
            Da dette projekt er en relativt simpel testopgave, har jeg ikke
            oprettet en staging-branch eller arbejdet med feature branches, som
            man typisk ville gøre i et professionelt setup.
          </p>
          <p className="text-gray-700 mb-4">
            I et mere virkelighedsnært scenarie ville jeg have lavet initial
            setup på <code>main</code>, hvorefter jeg ville arbejde videre på en{" "}
            <code>staging</code>-branch med tilhørende <code>feature/*</code>
            -branches til specifikke opgaver eller funktionaliteter.
          </p>
          <p className="text-gray-700 mb-4">
            Jeg ville derudover have opsat en GitHub Action, som automatisk
            deployer til en staging-server, når der pushes til{" "}
            <code>staging</code>. Fordelen ved CI/CD workflows som dette er, at
            fejl og bugs kan fanges tidligt, inden koden når produktion – og det
            skaber en mere robust og sikker udvikling.
          </p>

          <h3 className="my-6 text-2xl font-bold">
            GitHub repo og Git workflow
          </h3>
          <p className="text-gray-700 mb-4">
            Til simple adgangsbeskyttelser kunne jeg bruge en{" "}
            <strong>API key</strong>, som sendes med i headeren ved fetch-kald,
            og valideres i WordPress via en REST filter hook.
          </p>
          <p className="text-gray-700 mb-4">
            Hvis brugeren skulle logge ind og se sit eget indhold, ville jeg
            implementere <strong>JWT authentication</strong> (JSON Web Tokens) –
            fx med pluginet “JWT Authentication for WP REST API”. Her kan
            brugeren logge ind via `/wp-json/jwt-auth/v1/token`, få en token og
            sende den med i fremtidige kald.
          </p>
          <p className="text-gray-700 mb-4">
            Jeg har arbejdet lidt med <strong>OAuth</strong> i henhold til at
            sætte Microsoft Identity Platforms login modul ind som trejdeparts
            login i UmbracoCMS.
          </p>
        </div>
      </section>
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Opg 2: Deployment og infrastruktur
          </h2>
          <h3 className="my-6 text-2xl font-bold">
            Frontend og backend hosting
          </h3>
          <p className="text-gray-700 mb-4">
            Min wordpress er hostet hos <strong>simply.com</strong> på nuværende
            tidspunkt, dette er dog kun gjort da jeg har erfaring med dette til
            wordpress, og tilfældigvis havde hosting tilovers hos dem.
          </p>
          <p className="text-gray-700 mb-4">
            Jeg tænker helt sikkert der smartere måder at hoste både wordpress
            og frontenden bygget i next.js, i en platform, men bekendt med dette
            er jeg ikke.
          </p>

          <h3 className="my-6 text-2xl font-bold">CI/CD workflow</h3>
          <p className="text-gray-700 mb-4">
            Erfaringer jeg har fra et tidsligere projekter er at sætte GitHub
            actions op, som deployer til en staging-server, når der pushes til{" "}
            <code>staging</code> eller <code>main</code>. Fordelen ved CI/CD
            workflows som dette er, at fejl og bugs kan fanges tidligt, inden
            koden når produktion – og det skaber en mere robust og sikker
            udvikling.
          </p>
          <p className="text-gray-700 mb-4">
            Ellers er der en løsning som Vercel, som Next.JS nærmest er gift
            med. Jeg har dog ikke dybdegående erfaring med Vercel, men ved at
            der kan hostes og sættes auto-deploy op ud fra et gitcommit.
          </p>

          <h3 className="my-6 text-2xl font-bold">
            Domæne, SSL og miljøvariabler
          </h3>
          <p className="text-gray-700 mb-4">
            Domæne håndteres via Simply.com (eller ligende anden domænehost) med
            DNS peget mod WordPress-serveren eller frontend serveren. SSL
            håndteres automatisk af Let's Encrypt på Simply. Miljøvariabler som{" "}
            <code>NEXT_PUBLIC_API_URL</code> er defineret i i{" "}
            <code>.env.local</code> osv for andre envioriments. Her kan man også
            definere ting som database login, mailserver, getawayApi eller
            ligende.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-2">Sikkerhed</h4>
          <p className="text-gray-700 mb-4">
            Adgang til WordPress-admin er beskyttet med login. REST API’et kunne
            ved behov begrænses via API keys eller JWT-authentication. CORS og
            HTTPS er aktiveret, og plugins holdes opdaterede.
          </p>
          <p className="text-gray-700 mb-4">
            CORS er især vigtigt i min situation når fronted og backend ligger
            på forskellige domæner. (localhost - headless Wordpress).
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <code>Access-Control-Allow-Origin: *</code> //alle må få adgang
          </div>

          <h4 className="text-xl font-semibold mt-6 mb-2">
            Caching, logning og cDN
          </h4>
          <p className="text-gray-700 mb-4">
            I wordpress kan man få plugins som <strong>WP Super Cache</strong>,
            som kan stå for caching af WP løsninger.
          </p>
          <p className="text-gray-700 mb-4">
            Til frontend projektet som er hostet hos traditionelle webhosting,
            kan <strong>CloudFlare</strong> bruges til CDN og caching.
            Cloudflare kan også stå for SSL og DNS, og det er en god løsning til
            at optimere hastigheden og sikkerheden på din hjemmeside.
          </p>
          <p className="text-gray-700 mb-4">
            Jeg har lidt erfing med LogRocket til at logge fejl i frontenden,
            her har man et dashboard til at overvåge ens mange sider. Dog har
            jeg også brugt andre værktøjer som har været meget forskellige fra
            konsulent hus til konsulent hus.
          </p>
        </div>
      </section>

      <section className="bg-gray-300 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Opg 3: Tracking
          </h2>
          <h3 className="my-6 text-2xl font-bold">
            Hvad giver mening at track
          </h3>
          <p className="text-gray-700 mb-4">
            I et projekt som dette kunne det være relevant at tracke:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-4 space-y-2">
            <li>
              Sidevisninger af hver enkelt case (<code>page_view</code>)
            </li>
            <li>Klik på “Read more” på case-kort (link klik event)</li>
            <li>
              Klik på evt. CTA-knapper eller formularer - Dog er der ingen i
              dette projekt
            </li>
            <li>
              Scroll-dybde for at måle hvor langt brugeren engagerer sig - Især
              på cases siden, for at se om vi faktisk fangere kunderne
            </li>
          </ul>
          <h3 className="my-6 text-2xl font-bold">
            Hvordan er tracking satup?
          </h3>
          <p className="text-gray-700 mb-4">
            Jeg har tidligere tilføjet Google Tag Manager som script i head,
            dette script har jeg fundet på GTM egen side, hvoraf det copy past
            arbejde. Herfra kan jeg push forskellige dataLag til GTM med{" "}
            <code>window.dataLayer?.push</code> med argumenter der giver mening
            at track. her er et eksempel:
          </p>
          <p className="text-gray-700 mb-4">
            Når en case vises i <code>/cases/[slug]</code>, kunne jeg sende:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-2">
            <code>
              window.dataLayer?.push <br />
              event: "case_view",
              <br />
              case_title: "Adfærdsdrevet marketing strategi",
              <br />
              case_client: "AURA Energi"
              <br />
            </code>
          </div>
          <p className="text-gray-700 mb-4">
            I Google Tag Manager (GTM) lytter jeg på <code>event</code>-navne og
            sender data videre til Google Analytics 4 (GA4) via en konfigureret
            tag og trigger.
          </p>
          <p className="text-gray-700 mb-4">
            Det er sådan i grove træk det jeg har erfaring med. Dybere tracking
            og avanceret tracing som serverside tracing her jeg endnu ikke rørt
            ved men ser frem til at lære mere om det!
          </p>
        </div>
      </section>
      <section className="bg-gray-400 py-12">
        <div className="container mx-auto">
          <p className="text-gray-700 mt-6">
            Baggrund for denne løsning. Jeg har været inde og se mange løsninger
            lige fra shopify og wordpress til custom inhouse løsninger. Jeg har
            før dette projekt ikke arbejdet med wordpress som headless, men det
            har givet mig et andet take på hvordan Wordpress også kan bruges.
            Headless var ikke et nyt term for mig, da Borg customer portal er en
            Umbraco CMS headless løsning i grove træk.
          </p>
        </div>
      </section>
    </main>
  );
}

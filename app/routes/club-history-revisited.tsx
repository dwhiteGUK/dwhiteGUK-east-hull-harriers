import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SubPageHero } from '~/components/SubPageHero'

import presbyterian from '~/assets/images/Holderness-Road-Presbyterian-Harriers.jpg'
import crownClubhouse from '~/assets/images/Crown-Clubhouse.jpg'
import johnHakeney from '~/assets/images/John-William-Hakeney.jpg'
import homeOakFarm from '~/assets/images/Holme-Oak-farm.jpg'
import remnantsHomeOakFarmA from '~/assets/images/Remnants-of-Holme-Oak-Farm-building-Old-Kirk-Farm-Cowshed-a.jpg'
import remnantsHomeOakFarmB from '~/assets/images/Remnants-of-Holme-Oak-Farm-building-Old-Kirk-Farm-Cowshed-b.jpg'
import mapHomeOakFarm from '~/assets/images/Map-Showing-Location-of-Holme-Oak-Farm.jpg'
import ethelHakeney from '~/assets/images/Ethel-Hakeney-300x200.jpg'
import harriersBenefactor from '~/assets/images/East-Hull-Harriers-benefactor-700x700.jpg'
import april1965 from '~/assets/images/April-1965-at-the-Portobello-Scout-Hut.jpg'
import ehhDinner from '~/assets/images/East-Hull-Harrier-dinner.jpg'
import hullDailyMailA from '~/assets/images/HULL-DAILY-MAIL-Nov-20th-1969-a.jpg'
import hullDailyMailB from '~/assets/images/HULL-DAILY-MAIL-Nov-20th-1969-b.jpg'
import hullDailyMailC from '~/assets/images/HULL-DAILY-MAIL-Nov-20th-1969-c.jpg'

export default function ClubHistoryRevisited() {
  return (
    <div>
      <Header />
      <main>
        <SubPageHero heading="Club History Revisited" />©
        <div className="relative overflow-hidden bg-white py-16">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h2>
                <span className="block text-center text-lg font-semibold text-red-600">
                  A Look
                </span>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Back At East Hull Harriers History
                </span>
              </h2>
              <div className="grid grid-col-1 md:grid-cols-2 gap-8 mt-8">
                <p className="text-xl leading-8 text-gray-500">
                  After reading the Graham Brummitt article in the Club History
                  section of the website written in 1993, I found it fascinating
                  how and where the Harriers originated. Then on Facebook Dave
                  Gowans published the adjacent photo which shows that the
                  Holderness Road Presbyterian Harriers, founded in 1893, were
                  based behind what was the Green Man Pub on Holderness Road.
                  The picture shows part of the old Church still remaining. So
                  with the help of my wife and Merrill (Sutton Museum) I decided
                  to do some further research.
                </p>
                <img
                  src={presbyterian}
                  width="332"
                  height="443"
                  alt="Holderness Road Presbyterian Harriers clubhouse circa 1893"
                  className="rounded-lg object-cover object-center shadow-lg"
                />
              </div>
            </div>
            <div className="prose prose-lg prose-red mx-auto mt-6 text-slate-900">
              <p>
                The Club originated in 1893 as the Holderness Road Presbyterian
                Harriers located at the above site. In 1908 the Club moved to
                the Crown Inn on Holderness Road, this was formerly known as
                Mile House or sometimes Mile End as the Inn was exactly a mile
                from the Town Centre. Gary Forrester then found a photo of the
                old Clubhouse at the Crown which was published on Facebook under
                the Hull 'The Good Old Days' section.
              </p>
              <figure>
                <img
                  className="w-full rounded-lg"
                  src={crownClubhouse}
                  alt="Crown Inn Clubhouse, Holderness Road"
                  width={720}
                  height={440}
                />
                <figcaption>The Crown Inn, Holderness Road</figcaption>
              </figure>
              <p>
                While at this location the club name was changed to East Hull
                Harriers (nickname the All Whites due to club colours being all
                white). At the Crown Inn the 20 mile road race originated but
                sadly only ran for 2 years, probably cancelled out of respect
                for Fred Rumsby who died while competing in the 2nd year.
              </p>
              <p>
                <strong>Article Published in The Times, 5 April, 1909</strong>{' '}
                :- Frederick Rumsby, a prominent Hull runner, died yesterday
                without regaining consciousness, as the result of engaging in a
                20 miles Marathon race on Saturday. During the race Rumsby,
                several times, complained of dizziness to the cyclist scout
                accompanying him, but kept on running. Just as he was finishing
                the 20 miles he collapsed, and was carried into an Inn, where he
                lay unconscious till death took place. He was only 22, and won
                the race last year.
              </p>
              <p>
                After the Crown things become a little confused. The Club moved
                to Oak Tree Farm Sutton in the 1930's and leased a building from
                a Mr Hakeney. On further research it was proven that this Farm
                did not exist under that name. It would appear that the farm
                name may have been a nickname of some sort.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <p>
                    I have found that Kirk's Farm in Sutton was owned by Abraham
                    Rodmell in the 1890's. His wife Polly changed it's name to
                    Holme Oak Farm (due to a large Oak tree in the Garden). They
                    owned the Farm until it was sold to Jack or John William
                    Hakeney in the 1920's, these were both Butchers and Pig
                    Breeders on High Street Sutton. The Farm therefore is
                    probably Holme Oak Farm. This has now been confirmed by the
                    Local Historian at Sutton Museum.
                  </p>
                  <p>
                    Jack Hakeney died in 1928 but John lived until 1947 so it
                    was probably John who leased the Clubhouse to Harriers. In
                    the early 1930's John sold the Farm back to Abraham Rodmell
                    who passed it onto his son-in-law Con Calvert who obviously
                    allowed the Harriers to remain. The Harriers then moved in
                    the 1950's to the Paddock which was a section of land owned
                    by the Council alongside Sutton Golf Course. This is where
                    in 1957 the traditional Red/White Colours originated.
                  </p>
                </div>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src={johnHakeney}
                    alt="Crown Inn Clubhouse, Holderness Road"
                    width={102}
                    height={160}
                  />
                  <figcaption>The Crown Inn, Holderness Road</figcaption>
                </figure>
              </div>

              <figure>
                <figcaption>
                  Shown below from THE LONDON GAZETTE, 20 JULY , 1926. States
                  that John William was owner of Holme Oak farm, his family
                  owned the Cricket Field as well. The Family also had a Smithy
                  and what used to be the Hardware shop in Sutton was part of
                  their living accomodations.
                </figcaption>
                <img
                  src={homeOakFarm}
                  className="w-full rounded-lg"
                  alt="The London Gazette snippet"
                  width={1120}
                  height={656}
                />
              </figure>

              <figure>
                <figcaption>
                  Shown below from THE LONDON GAZETTE, 20 JULY , 1926. States
                  that John William was owner of Holme Oak farm, his family
                  owned the Cricket Field as well. The Family also had a Smithy
                  and what used to be the Hardware shop in Sutton was part of
                  their living accomodations.
                </figcaption>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <img
                    src={remnantsHomeOakFarmA}
                    className="w-full rounded-lg"
                    alt="Remnants of Home Oak Farm"
                    width={512}
                    height={384}
                  />
                  <img
                    src={remnantsHomeOakFarmB}
                    className="w-full rounded-lg"
                    alt="Remnants of Home Oak Farm"
                    width={431}
                    height={384}
                  />
                </div>
              </figure>
              <figure>
                <figcaption>
                  Remnants of Holme Oak Farm building, (Old Kirk Farm Cowshed).
                  Location below.
                </figcaption>
                <img
                  src={mapHomeOakFarm}
                  className="w-full rounded-lg"
                  alt="Map showing location of Home Oak Farm"
                  width={644}
                  height={554}
                />
              </figure>

              <h3>Further Investigations</h3>
              <p>
                Further to investigations into the clubhouse whereabouts it is
                now possible to confirm the location as Holme Oak Farm Sutton
                during the period of early 1930's to the 1950's.
              </p>

              <p>
                Avril Smith wife of the late George Smith, (who was an East Hull
                Harrier in the 60's to the 80's) is actually the Granddaughter
                of John William Hakeney who leased the land to the Harriers in
                the early 1930's.
              </p>

              <p>
                The Clubhouse was one that the runners erected themselves on the
                Farm land of the Hakeney's. The Clubhouse was supposed to have
                some sort of bathing area i.e. the old bath tub type. Avril
                seems to recall that someone named Green always remained behind
                after the runners had gone for a run, so the bath was filled and
                warmed for their return.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <figure>
                  <img
                    src={ethelHakeney}
                    className="w-full rounded-lg"
                    alt="Ethel Hakeney sat outside the clubhouse"
                    width={300}
                    height={200}
                  />
                  <figcaption>
                    The picture shows Ethel Hakeney sat on what may have been
                    part of the old Oak Tree outside the Clubhouse. View behind
                    is what is now Howdale Road Estate. (The Clubhouse itself
                    was erected by the Members and rumoured to be the same one
                    relocated from outside the Crown Inn
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={harriersBenefactor}
                    className="w-full rounded-lg"
                    alt="East Hull Harriers benefactor with his family"
                    width={300}
                    height={300}
                  />
                  <figcaption>
                    <p>
                      East Hull Harriers benefactor with his family circa 1930.
                    </p>
                    <p>
                      Picture shows John and Martha with children:- Left to
                      Right George, Ernest (back), Ethel (Front) and Edith.
                    </p>
                  </figcaption>
                </figure>
              </div>

              <h3>The Major</h3>
              <p>Major George Henry Stone Born 1897 - Died 1969.</p>

              <p>
                George's daughter Margaret now 88 has fond memories of her
                father. The first being that she was told he falsified his age
                so that he could sign up for WW1. So in 1914 he joined the Royal
                Engineers.
              </p>

              <p>
                Private Stone was sent to France where he and his comrades were
                tasked on numerous occasions to either rebuild or repair some of
                their bridges. On one particular bridge building project they
                were attacked and bombed, all were killed with the exception of
                George who came out with severe shrapnel wounds to one leg
                (hence the reason why some members of the club thought that he
                sometimes limped). George Henry then came back to England and
                married Emily in 1922. They had 3 children, Reginald Robert,
                Margaret Joyce and young George Edward. George Henry was a keen
                cyclist and everywhere he went his bicycle went too. He had
                various jobs throughout his career one was a Club Agent, another
                was in the Clerical Department at Paragon Station. At some point
                throughout his life he joined the Army Cadets based on
                Holderness Road Hull. This was where George worked his way up to
                Major. I have been reliably informed that to attain the rank of
                Major it would generally take at least 10 years, so unless he
                left WW1 as a commissioned officer he must have joined the
                Cadets prior to WW2. George was an instructor for 12-18 year old
                Cadets for a good few years this may have been one of the
                reasons that kept him from serving in WW2.The other possible
                reason is that after injury the category you are in changes from
                A to a B (or something along those lines) and this makes you
                ineligible for service.
              </p>

              <p>
                George's son, young George, as he was commonly known, served in
                the Royal Navy, where he was a runner and boxer who represented
                the Navy. He was also an electrician and one of his roles was to
                arm the Torpedo's. Reginald and Margaret ( the other siblings)
                both served in the RAF in WW2.
              </p>

              <p>
                George's daughter Margaret married a Peachey and they had a son
                Christopher. Chris, George's grandson also liked to run and at
                one stage was optimistically entered in the School XC
                Championships. The course was very muddy and Christopher only
                had a pair of sandshoes which would have been in danger of
                coming off in the mud. Grandad George Henry came to the rescue
                by using bandages to tie on Christopher's shoes. Then it was
                stand and wait. The weather was apparently very cold and
                Christopher only had a thin white vest and shorts to run in. As
                George Henry and son George were waiting, a lone figure appeared
                in the distance and much to their surprise it was young
                Christopher Peachey coming home in 1st place to become school
                champion.
              </p>

              <p>
                Major George by a twist of fate entered EHH in the early 50's
                and stayed, as Secretary and then Club Chairman. He apparently
                lived and breathed the Harriers and on Club nights he was often
                seen filling the tin bath and making the tea for the runners
                return. We were very fortunate to have him.
              </p>

              <p>George died in 1969 aged 72.</p>

              <figure>
                <img
                  src={april1965}
                  className="w-full rounded-lg"
                  alt="Several members of the club at Portobello Scout Hut in April 1965"
                  width={959}
                  height={731}
                />
                <figcaption>
                  <p>
                    April 1965 at the Portobello Scout Hut. In the photo are,
                    L.to R Chris Peachey (Maj. Stone's grandson) and Junior boys
                    CC Champ., Peter Moon ( Youths CC Champion). Maj. Stone
                    (President), Graham Brummitt sportsman of the year, Ted
                    Beaumont (Hon. Sec) Guy Buckley (senior CC Champion) and
                    Steve Kairis (Boys CC Champion).
                  </p>
                  <p>
                    Also in the picture are two gate like trophies which
                    according to Margaret these used to be hand made by Dick
                    Dobson were given out as trophies.
                  </p>
                </figcaption>
              </figure>

              <figure>
                <img
                  src={ehhDinner}
                  className="w-full rounded-lg"
                  alt="East Hull Harriers dinner"
                  width={581}
                  height={405}
                />
                <figcaption>
                  <p>
                    Top Left to right:- Unknown ,Mrs Stone, Major George H
                    Stone, Avril Beaumont, Ted Beaumont, Ted's Brother.
                  </p>
                  <p>
                    Middle Left :-Mrs Ken Hurry, Bottom three :- Unknown, George
                    Smith and Avril Smith.
                  </p>
                  <p>
                    Photo was taken at what appears to be an East Hull Harrier
                    dinner sometime during the 1960's.
                  </p>
                </figcaption>
              </figure>

              <figure>
                <figcaption>
                  <strong>
                    Articles from the HULL DAILY MAIL Nov 20th 1969
                  </strong>
                </figcaption>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img
                      src={hullDailyMailA}
                      className="w-full rounded-lg"
                      alt="Hull Daily Mail article mourning the loss of Major George H Stone"
                      width={573}
                      height={236}
                    />
                    <img
                      src={hullDailyMailB}
                      className="w-full rounded-lg"
                      alt="Hull Daily Mail article mourning the loss of Major George H Stone"
                      width={539}
                      height={708}
                    />
                  </div>
                  <img
                    src={hullDailyMailC}
                    className="w-full rounded-lg"
                    alt="Hull Daily Mail article mourning the loss of Major George H Stone"
                    width={313}
                    height={986}
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SubPageHero } from '~/components/SubPageHero'

import oldPic from '~/assets/images/oldpic1-300x240.gif'

export default function ClubHistory() {
  return (
    <div>
      <Header />
      <main>
        <SubPageHero heading="Club History" />
        <div className="relative overflow-hidden bg-white py-16">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h2>
                <span className="block text-center text-lg font-semibold text-red-600">
                  History of the Club
                </span>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  The First Hundred Years
                </span>
              </h2>

              <p className="mt-8 text-xl leading-8 text-gray-500">
                The Club was formed in 1893 under the name of Holderness Road
                Presbyterian Harriers, with their Headquarters in the Schoolroom
                at the Church. Although most of the Church was pulled down in
                1972 the Schoolroom still remains, today its part of the Green
                Man Public House on Holderness Road. The first President was the
                Vicar of the Church the Rev H.P. Slade, he seemed to be a very
                respected figure in Presbyterian circles of the day, as he was
                invited to attend the opening of the Newington Presbyterian
                Church in West Hull 1895. The Church was according to all
                reports, a very large building in Yellow Brick with a seating
                capacity of over 1000, and important enough to have tram rails
                to its rear entrance.
              </p>
              <div className="prose prose-lg prose-red mx-auto mt-6 text-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <figure>
                    <div>
                      <img
                        src={oldPic}
                        alt="East Hull Harriers from Yesteryear"
                        width={300}
                        height={240}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <figcaption>East Hull Harriers from Yesteryear</figcaption>
                  </figure>
                  <p>
                    There appears to have been many other Clubs in the town at
                    the time Speedwell Harriers, Central Harriers, Hull
                    Harriers, St Marks Harriers, and Stepney Harriers were all
                    operating at the time. Some of the Clubs even staged runs on
                    Thursday afternoons to cater for shop workers who were off
                    work on half day closing.
                  </p>
                </div>
                <p>
                  The Club changed its name in 1908 to East Hull Harriers and
                  moved along the road to the Crown which was also known as Mile
                  House, J. McMillan was elected President, a position he was to
                  hold till the end of the 1st World war. The Club adopted a new
                  badge but remained faithful to the White Vest and Shorts and
                  were known as the 'All Whites'
                </p>
                <p>
                  The Club introduced a 20-Mile race onto the local calendar,
                  this was acknowledged by the Northern Athletic Governing body
                  of the day as a bold step. The 1909 race made the headlines
                  for the wrong reasons; very hot weather greeted the runners.
                  The previous year's winner Fred Rumsby a plumber by trade
                  established an early lead, and looked like repeating his win.
                  Later in the event he started to suffer, he eventually
                  collapsed and was taken to a doctor's surgery in a
                  wheelbarrow, where he passed away in the early hours of the
                  4th April.
                </p>
                <p>
                  He died of haemorrhage of the lungs at only 22 years of age;
                  his Gravestone can still be seen in Western Cemetery on
                  Chanterlands Avenue (19458 Compart.) The sad thing is that
                  both his parents lived to a grand old age. The Club holds in
                  its archives the medals which Rumsby won doing his short
                  career. It wasn't till the early fifties that the Club staged
                  another 20-Mile race, until John George Easey picked up the
                  threads.
                </p>
                <p>
                  In 1914 the club staged Its Coming of Age Party at. the
                  Grovenor Hotel, Carr Lane on a grand scale.
                </p>
                <p>
                  In 1920 G. T. Wilkinson a former Hon Treasurer of the Club,
                  was elected to the Presidency, a position he was to hold till
                  1958.
                </p>
                <p>
                  The Club introduced their first Club Cross Country
                  Championship, and a collection amongst the members raised
                  enough money to purchase The Members Cup, the first Winner was
                  F. K. Bentley. Joe Bullamore was the first athlete to win the
                  trophy three times on the trot, the most prolific winner of
                  the trophy with six to date is, Peter Moon a versatile
                  performer who won the Northern Counties 3Km Steeplechase in
                  the 70's. Previously the Club Championships had been staged on
                  the road, from the Crown premises to the Chapel in Bilton and
                  Back, the record holder for the course Fred Smales who offered
                  a Gold Medal to the runner who beat his time, such was claimed
                  by Dave Rudd in the 20's.
                </p>
                <p>
                  In the mid 20's the Club had a dispute with the Hull &
                  District Cross Country Association, resigning their
                  affiliation of the Association. The problem seemed to revolve
                  round EHH' s contention that the lap scorers had miscounted
                  the laps, hardly surprising seeing that the course was very
                  short for the eight mile event something in the order of forty
                  laps had to be covered. The matter was soon resolved however,
                  and the Club has played an active part ever since.
                </p>
                <p>
                  During the 30's Phil. Green was elected Hon Secretary and held
                  many positions in the Club. He was an inspiration to the
                  youthful Arthur McAllister who Green introduced into the
                  corridors of athletic administration. Arthur served his
                  apprenticeship well and climbed to the very top of the sport,
                  at this present time Arthur holds the Presidency of the
                  British Athletic Federation, and is well respected throughout
                  the World for his sense of fair play. McAllister has never
                  quite been given the recognition he deserves for uniting the
                  Mens and Womens wings of the sport, whilst making sure that
                  the sport does not fall in the wrong hands.
                </p>
                <p>
                  The Club was on the move again in the 30's leaving the Crown
                  Inn to make its HQ on land rented from Mr Hakeney, Oak Tree
                  Farm, Sutton where it remained till the early fifties when it
                  moved to its present site in the Paddock part of the Sutton
                  Park Golf Complex, leased from the Hull City Council.
                </p>
                <p>
                  In the early fifties Major G. H. Stone made an unusual
                  entrance into the Club, he attended an ACM to tender his son's
                  apologies for absence and left as Hon. Secretary. It was not
                  the only time George saved the day, for in the sixties when no
                  one stood as Hon Secretary to replace Ted Beaumont, Major
                  Stone acted in this important capacity for a year.
                </p>
                <p>
                  In 1957 the Club changed its colours from the traditional
                  white vest to red, but retained the white shorts.
                </p>
                <p>
                  Many Clubs failed to understand the 'Litter Act' when it was
                  introduced in the 60s, but the Club organized its activities
                  round the new law, and still lays paper trails on Saturday
                  afternoons during the Winter Months. It would be hard to break
                  the tradition that was set from the formation, and carried out
                  so successfully by the likes of Alan Wiillerton, & Dicky
                  Dobson, who both spent 50 years in the sport, passing their
                  art on to Bill Hearfield, Ted Lawson, Guy Buckley, Colin
                  Young, Brian Smith, Bill Rands, Pete Harrison etc.
                </p>
                <p>
                  Ben Hooson was probably the first Club athlete to try Ultra
                  distance, when he participated in the Butlin Walk 1960 Land's
                  End to John '0' Groats', he was the forerunner to the likes of
                  John Towers, Colin Dixon, Brian Jennison, Andrew Thacker,
                  James Rogers, Jonathon Whitehead, Keith Scurr and others. It
                  is many years since the Club staged its first 24 Hour Track
                  Race at Costello, in recent years the 24 hours has grown to be
                  a major event in British and European ultra running.
                </p>
                <p>
                  The Club Title was extended to include 'and Athletic Club'
                  during the sixties, at this period the Club turned down the
                  opportunity to move onto the side of the Alderman Kneeshaw
                  Running Track which was being developed.
                </p>
                <p>
                  In 1968 a Dinner was staged to celebrate the 75th Anniversary,
                  the event at Goodfellowship, Cottingham Road was a very formal
                  occasion was presided over by Major Stone who gave one of the
                  best 'after dinner' speeches, starting with the 'Thin Red
                  Line' and gripping the members attention throughout with great
                  skill.
                </p>
                <p>
                  The seventies saw the completion of a permanent building,
                  drawn up by Alan Hugman and built by Bill Edwards a former
                  Club Champion. The new HQ was opened by Dave Slater an
                  International Cross Country Runner from Skyrac AC West
                  Yorkshire. in 1977, the new building also catered for lady
                  athletes a new innovation which followed the trend.
                </p>
                <p>
                  Financial help in the way of sponsorship from the Hull City
                  Council, the new Humberside County Council the Sports Council,
                  and an Interest free loan from the National Playing Fields
                  Association, and Phil Grayson, Pete Collinson and Grahame
                  Brummitt who willingly served as guarantors, who made a dream
                  come true for the then Club Secretary Pete Dearing. It was
                  Pete's enthusiasm backed by a hardworking Committee, prepared
                  to burn the 'Midnight Oil' that produced the goods. Peter
                  Elletson gained his Junior International Vest for Cross
                  Country representing England at Glasgow where his country
                  gained gold Medals, Pete finished in front of Said Aouita
                  (Morocco) that day.
                </p>
                <p>
                  By 1980 the premises had to be extended to keep pace with the
                  new demand imposed on by the influx of the 'fair sex' it was
                  extended further to house the ladies and provide weight
                  training facilities, again it was made possible through
                  sponsorship and the Club Fund Raising activities and a very
                  active committee.
                </p>
                <p>
                  The Club has always recognized the draw of the Humber Bridge
                  as a focal point in the area, and staged the first athletic
                  event over the Bridge with an Open 10 mile race. In more
                  recent times the Club was one of the few North Bank
                  Establishments who were prepared to keep the Humber Bridge
                  Marathon race going. When the County Council found they could
                  no long finance the race, the Club were proud to stand firm
                  with members of Cleethorpes at the various meetings.
                </p>
                <p>
                  Dave Ottaway captured the Northern Counties 800 metres early
                  in the eighties, and the 1500m title in the 90s,
                </p>
                <p>
                  During which time the club enjoyed its best years in track and
                  field athletics.
                </p>
                <p>
                  The nineties produced two 'Firsts' for the Ladies when Julie
                  Kemp (later Julie Harvey) was elected Vice President and her
                  sister Linda Thacker became the first Lady secretary,
                  following on from their Father Ron Kemp an outstanding
                  President during the eighties, and a double cross country
                  champion 1954/55 and 1971/72 seasons.
                </p>
                <p>
                  There have been many famous people pass through the Club on
                  their way to stardom in other activities Roy Sandstrom
                  (Olympic Sprinter), Patrick Howdle (Olympic Biathlon), Stuart
                  Travis (International Judo), Zook Ema Chris Young (Both later
                  played for HKR) the late Mike Noble who was an MP, and the
                  late Ernie Price who played music in famous Bands, to name but
                  a few.
                </p>
                <p>
                  The Club has never been slow at coming forward in staging
                  events, having hosted the Northern & Yorkshire Cross Country
                  Championships on the Beverley Westwood.
                </p>
                <p>
                  Only a casting Vote at a Committee Meeting prevented an
                  application being made to stage the National at Beverley.
                </p>
                <p>
                  However, its on the road where the most promotions have been
                  staged, the Open 20 Mile, The Major G. H. Stone Half Marathon
                  and Summer League are all well established races, and coupled
                  with two Fun Runs a year the Club caters for all standards.
                </p>
                <p>
                  The Club is proud to have reached 100 years from a single
                  source, when others have fallen by the wayside, and
                  presentation nights are always well attended with old and new
                  members alike.
                </p>
                <p>
                  <strong>Grahame Brummitt</strong>
                  <br />
                  President 1973 to 1981 and 1991 to 1993.
                  <br />
                  28th October 1993
                </p>
              </div>
            </div>
            <div className="prose prose-lg prose-red mx-auto mt-6 text-slate-900"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

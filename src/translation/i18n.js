import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    error: {
                        title: "Opps! this page doesn't exist",
                        text: 'Oops! The page you are looking for does not exist. It might have been moved or deleted.',
                        btn: 'Return to home page'
                    },
                    header: {
                        nav1: 'Home',
                        nav2: 'Donate',
                        nav3: 'projects',
                        nav4: 'Contact'
                    },
                    footer: {
                        contact: {
                            title: 'Contact us:',
                            phone: 'Phone:',
                            phoneNumber: '+972-52-482-7994',
                            email: 'Email:',
                        },
                        links: {
                            title: 'Links',
                            item1: 'website',
                            item2: 'website',
                        },
                        subscribe: {
                            title: 'Subscribe',
                            firstName: {
                                ariaLabel: 'First Name',
                                placeholder: 'First Name',
                                required: 'this field is required',
                                min: 'Name is too short',
                                max: 'Name is too long',
                            },
                            lastName: {
                                ariaLabel: 'Last Name',
                                placeholder: 'Last Name',
                                required: 'this field is required',
                                min: 'Name is too short',
                                max: 'Name is too long',
                            },
                            email: {
                                ariaLabel: 'your email',
                                placeholder: 'Email',
                                errorMsg: 'Email is invalid',
                                errorMsg1: 'Email already exists',
                                errorMsg2: 'Sent successfully',
                            },
                            number: {
                                ariaLabel: 'Phone Number',
                                placeholder: 'Phone Number',
                                msg: 'Phone nuber is invalid'
                            },
                            checkBox: {
                                ariaLabel: 'accept getting updates checkbox',
                                label: 'Accept getting updates',
                            },
                            button: 'Send',

                        },
                    },
                    hero: {
                        subtitle: 'Kibbutz Nirim ',
                        text: `was first established on the eve of Yom Kippur in 1946 as part of David Ben Gurion's plan "to settle the Negev with Jewish settlements and make the desert bloom". Over the years, the kibbutz developed a vibrant community life and significant construction and development. Nirim's livelihood is based on its rich and varied field crops and plantations, dairy farm, and the organic farm, which is one of the largest and most prosperous in Israel. Despite living in a security-challenged area, the residents, pioneers in spirit, have dealt with the hardships of living on the border for years, all the while proudly farming the land “up to the border”.`,
                        src: "https://www.youtube.com/embed/9fBMxYMt2vI",
                        overlayText: 'Kibbutz Nirim',
                    },

                    afterOct: {
                        title: 'On the morning of October 7',
                        p: ` Hamas terrorists entered the kibbutz, setting homes on fire, shooting at civilians, and throwing grenades. For hours, the kibbutz was under siege, as most of the residents did all they could to hunker down in their saferooms and protect their families . In the aftermath, five people were brutally murdered, and another five were kidnapped and taken to Gaza. At the time of writing, two of them are still being held captive, their fates unknown. 3 IDF soldiers, including the commander of the southern brigade, that arrived at the kibbutz in the early morning to defend our community were killed in the battle. Their bodies were kidnapped to Gaza as well . The physical destruction is immense: 30 houses were burned, buildings and public areas were severely damaged, many infrastructures were destroyed. Over 60% of the kibbutz's agricultural land was completely burned.`,
                        testiTitle: 'Quotes',
                        testi1: {
                            title: 'Barak L.',
                            p: "“My husband has is weapon pointed to the door, at this point the alarms and the explosions in the background are least of our problems, I say to myself, if they come in and shoot I will be my children's shield, I will protect them with my body …”"
                        },
                        testi2: {
                            title: 'Miriam M.',
                            p: "“I am alone in my house in the safe room, trying to understand what is going on, all this time thinking about my son, he was at one of the parties he managed to find shelter, only after he was rescued, he told me that they were hiding while all around them the terrorists where around them on their motorcycles...”"
                        },
                        testi3: {
                            title: 'Yossi K.',
                            p: "“On Saturday morning I took my daughters dog for a walk, we were on the way to the back gate to go out to the field when the alarms started to go off. I ran to an old bomb shelter near the youth center and waited , but the alarms and the bombing don’t stop, after about an hour I deiced to run toward the houses and seek shelter in a saferoom, but all the houses are locked and I cant get in…”"
                        },
                        testi4: {
                            title: 'Eldad H.',
                            p: "“My wife was reading the messages on the group text and we understood that we had to lock the saferoom's door , but we have no lock we hear noises in the house, I stood next to the door holding the handle, all this time praying that they wont come through the window because there is no lock on the window as well, meanwhile my wife, with extraordinary resilience is calming my two year old in one hand and in the other holding the phone, sending messages for help.”"
                        },
                        subtitle: 'Despite the shock and pain, the terrorists did not break our spirit!'
                    },
                    kibbutz: {
                        title: 'Kibbutz Nirim',
                        subtitle1: 'A beacon of community and resilience.',
                        subtitle2: 'Returning Home',
                        text: 'The Kibbutz Nirim community has been shaped by decades of resilience and the cultivation of a strong community tradition, passed down through generations. We are currently focused on healing and rebuilding the community, but our thoughts and hearts are set on returning home to Kibbutz Nirim. To make this possible, we need to help the community recover from the crisis and rebuild their lives by creating designated spaces that serve as infrastructure for joint community activities, projects aimed at nurturing education, stimulating economic growth, and enhancing communal life, while also fostering a safe and supportive environment.',
                        photoAlt: 'field of flowers in the kibbutz'
                    },
                    needs: {
                        title: 'What do we need:',
                        subtitle: 'Rebuilding Kibbutz Nirim: Key Development Projects',
                        ul: {
                            li1: {
                                subtitle: 'Educational Facilities: ',
                                text: 'Revitalize learning environments to foster creativity and joy. Plans include expanding our kindergarten to enrich early education, constructing a new youth club for community engagement, and launching diverse educational activities for children and teens.',
                            },
                            li2: {
                                subtitle: 'Health and Wellness:',
                                text: 'Establish support systems with therapeutic programs and a new sports center, providing physical and emotional rehabilitation for residents affected by trauma.',
                            },
                            li3: {
                                subtitle: 'Community Revitalization:',
                                text: 'Upgrade communal spaces into safe and welcoming areas for interaction and growth, like building a vibrant playground, enhancing the community garden and turning the swimming pool into a community hub.',
                            },
                            li4: {
                                subtitle: 'Infrastructure Advancement:',
                                text: 'Strengthen economic and environmental sustainability through strategic infrastructure projects such as the dairy farm expansion and reservoir reconstruction, generating revenue and securing resources.',
                            },
                            link: 'Learn more...'
                        },
                    },
                    cta: {
                        text2: "We have several impactful projects in need of funding. Please feel free to contact us if you're interested in supporting our initiatives!",
                        text: `We invite you to join us in our journey back home to Kibbutz Nirim. Your support is not just a contribution—it's an investment in the future of Nirim's community, a testimony to the power of solidarity and unity, and an example of the resilience of Am Israel.`,
                        button: 'Donate',
                    },
                    contact: {
                        title: 'Sing up to our newslatter',
                    },
                    projects: {
                        educational: {
                            kinderGarden: {
                                title: 'Renovation and expansion of the kindergarten',
                                text1: "The kibbutz's kindergarten, the equipment, and the yards around were damaged by the 7.10 attack and by the many rockets and missiles fired at the kibbutz grounds since then. With your generous support, we can rebuild and expand our kindergarten, creating a space that inspires creativity, learning, and joy. Your donation will not just fund bricks and mortar; it will sow the seeds of a brighter future for future generations.",
                                budget: 'Total Project Budget:   $850,000',
                                needed: 'Total funding needed: $650,000',
                                text2: 'The budget encompasses building renovation, adding two new kindergarten classes, Kindergarten and yard equipment',
                            },
                            activities: {
                                title: 'Educational activities',
                                text1: 'Creating an array of informal education activities for kids and teenagers',
                                budget: '       Total Project Budget: $100,000',
                            },
                            youthClab: {
                                title: 'Youth clab',
                                text1: 'Restoration, upgrade, and expanding the youth club',
                                budget: '      Total Budget Project: $150,000',
                            },
                        },
                        health: {
                            therapies: {
                                title: 'Treatment and therapies',
                                text1: "Complementary treatment and therapies for victims of 7/10",
                                budget: 'Per year: $100,000'
                            },
                            sportsCenter: {
                                title: ' A sports center for children and youth',
                                text1: 'The new sports center for children and youth in Nirim will provide a safe and enjoyable environment, as well as physical and emotional treatment and rehabilitation',
                                text2: 'The center will cater to individual and group activities and will be supervised by certified professionals and trainers.',
                                subtitle: 'The center will feature the following facilities:',
                                ul: {
                                    li1: 'A "Ninja" complex that is tailored to different age groups $200,000',
                                    li2: 'A climbing wall that is suitable for various difficulty levels $100,000',
                                    li3: 'A Gymboree Complex specifically designed for toddlers $50,000',
                                },
                                budget: ' Total Project Budget: $350,000'
                            },
                        },
                        community: {
                            colorfulPlayground: {
                                title: 'A new colorful playground',
                                text1: 'Providing the children of the kibbutz with an inviting and enjoyable play space and a fun meeting place for Children and young parents',
                                subtitle: 'The playground will feature:',
                                ul: {
                                    li1: 'Swings adapted for different ages',
                                    li2: 'Climbing equipment',
                                    li3: 'A playground for toddlers',
                                    li4: 'A huge adventure facility',
                                    li5: 'Lawns and seating areas.'
                                },
                                budget: '  Total Project Budget: $500,000'
                            },
                            diningHall: {
                                title: 'Renovation and protective reinforcement of the dining hall and the grocery store',
                                text1: "Due to the kibbutz's proximity to the border, reaching a safe place during an alarm is between 0 and 10 seconds.",
                                highlight1: "A kibbutz's communal dining room",
                                text2: " is the community's heart and soul. Nirim’s dining hall is too small to accommodate all the community members; therefore, community-wide events and activities, holiday meals, and shared Friday evening meals are held on the kibbutz lawns in the open air. ",
                                highlight2: 'Moving the kibbutz dining room to a spacious and protected space',
                                text3: "will allow the entire community to gather safely and celebrate holidays together, hold joint Friday meals and community events, even in difficult, tense times."
                            },
                            groceryStore: {
                                title: 'Nirim’s grocery store',
                                text1: 'serves the residents of Nirim and the surrounding communities. Customers and staff must run to the nearest protected place outside the store during emergencies.',
                                text2: 'The new grocery store will be built In the upper store of the dining hall building. The complex will allow the expansion of the grocery area and the construction of a more innovative system that will provide more efficient service to the kibbutz residents and the residents of the nearby settlements.',
                                text3: 'The budget encompasses building renovation, purchasing equipment and furniture for the dining room,  adapting the structure for storing and cooling food products for the grocery store',
                                budget: 'The total budget needed for the dining hall and grocery store: $1,000,000'
                            },
                            communityGarden: {
                                title: 'Community garden',
                                text1: 'Upgrading and expanding the community garden into an experiential space for joint activities for parents and children, including a Bedouin tent and Tabun oven',
                                budget: 'Total Project Budget $80,000 '
                            },
                            pool: {
                                title: 'Swimming Pool Restoration',
                                text1: 'Transform the existing swimming pool into a community hub, enhancing its utility and accessibility year-round.',
                                subtitle: 'The budget encompasses Renovations and Enhancements:',
                                ul: {
                                    li1: 'Heating System: Install a heating system pool for optimal use throughout a longer period of the year',
                                    li2: 'Community Space Development: Develop surrounding areas for community events and social gatherings.'
                                },
                                budget: 'Total Project Budget: $150,000'
                            },
                        },
                        infrastructure: {
                            dairy: {
                                title: 'Restoration and upgrading of Nirim’s Dairy',
                                text: 'On October 7, during the Hamas attack on the Kibbutz, a missile struck the Cowshed, causing severe damage to the roof and disrupting electricity and water infrastructure.',
                                text2: 'The restoration and upgrading of the Cowshed will allow an increase of 700,000 liters (185,000 gallons) in the annual milk quota, strengthening the economic resilience of the kibbutz and of the entire Western Negev region',
                                budget: 'Total Project Budget:    $ 4,000,000',
                                needed: 'Total Funding needed: $ 2,500,000',
                                ul: {
                                    title: 'The budget encompasses :',
                                    li1: 'The renovation of the roof and existing shades',
                                    li2: 'The expansion and automation of the milking center',
                                    li3: 'Upgrading the feeding area to a more modern and efficient setup',
                                    li4: 'building two additional sheds for enhanced capacity'
                                },
                            },
                            reservoir: {
                                title: 'The Reservoir',
                                subtitle: `was established in the Western Negev region as part of the fulfillment of David Ben-Gurion's Zionist dream – “To develop the Negev and make the desert bloom”`,
                                text1: 'Nirim’s Reservoir collects floodwater from Besor River during the rainy season to provide irrigation for the agricultural fields of Kibbutz Nirim during the dry months.',
                                ul: {
                                    li1: 'The reservoir is vital in sustaining Nirim’s agricultural activities with a volume of about 600,000 cubic meters.',
                                    li2: 'Recent years of limited rainfall have resulted in fewer floods, which has impacted the quantity and quality of water in the reservoir.',
                                    li3: "A missile strike during The Swords of Iron War damaged the reservoir's sealing, further complicating water storage and quality maintenance.",
                                },
                                text2: 'Establishing the water reservoir leased to the State of Israel will generate an annual income of $410,000 for Kibbutz Nirim. The state has committed to a 15-year lease agreement, enhancing the kibbutz’s financial stability.',
                                text3: 'The budget encompasses constructing a 3 km-long water pipeline, a pump complex with remote control, a leasing system for the State of Israel, filtration, chlorination, and water control. In addition, fencing infrastructure, safety, permits, and planners are included.',
                                budget: 'Total Project Budget: $2,500,000',
                                needed: 'Total Funding needed: $1,500,000'
                            }
                        },
                    },
                }
            },
            he: {
                translation: {
                    header: {
                        nav1: 'אודות',
                        nav2: 'לתרומה',
                        nav3: 'פרוייקטים',
                        nav4: 'צור קשר'
                    },
                    hero: {
                        src: "https://www.youtube.com/embed/fiMhV3ZYPn8",
                        qutoe: "",
                        overlayText: 'קיבוץ נירים',
                    },
                    afterOct: {
                        title: 'הטבח של ה-7 באוקטובר',
                        p: `
בבוקר יום שבת ה 7 באוקטובר, פלשו לקיבוץ נירים עשרות מחבלים חמושים ברובים, משגרי אר-פי-ג'י ורימונים.
הם פלשו לתוך הבתים, רצחו, חטפו, בזזו, שרפו והרסו הם כל מה שניכר בדרכם.
במשך שעות ארוכות הסתגרו תושבי הקיבוץ בתוך חדרי הביטחון בביתם, כאשר הם מחזיקים את דלתות הממ"ד בידיהם ומגנים בגופם על משפחותיהם, בזמן שהמחבלים יורים וזורקים רימונים לתוך הבתים.
במתקפת הטרור נרצחו באכזריות 5 תושבים, 5 תושבים נחטפו, שניים מהם עדיין שבויים בידי חמאס. 
בתים רבים נבזזו ונשרפו כליל, מבנים ושטחים ציבוריים נהרסו, ותשתיות רבות הושמדו.
למעלה מ 60% מהשטחים החקלאיים של הקיבוץ נשרפו או נהרסו כליל. 
הקהילה נעקרה מביתה, החברים הפכו לפליטים בארצם.
ולמרות הכאב והצער, רוחנו לא תישבר! אנו נחושים לחזור לנירים, לבנות מחדש את הבית ולשקם את חיינו כקהילה איתנה ומשגשגת
`,
                        testi1: {
                            title: 'hello',
                            p: 'hellooo'
                        }
                    },
                    contact: {
                        title: 'הירשמו לעדכונים',
                    }
                }
            }
        }
    });

export default i18n;
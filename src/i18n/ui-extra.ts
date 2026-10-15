import type { LocaleId } from "./languages";

/** Lines that were still falling back to English. */
export const extra: Record<Exclude<LocaleId, "en" | "en-US">, Record<string, string>> = {
  gd: {
    "Ceremonial counties of England, north at the top": "Siorrachdan deas-ghnàthach Shasainn, tuath aig a' mhullach",
    "Greater London and the City of London": "Lunnainn Mhòr agus Cathair Lunnainn",
    "County shapes are simplified from open boundary data. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. The City of London shape is © OpenStreetMap contributors.":
      "Tha cumaidhean nan siorrachdan air an sìmpleachadh bho dhàta chrìochan fosgailte. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. Tha cumadh Cathair Lunnainn © OpenStreetMap contributors.",
    "Places in England, north at the top": "Àiteachan ann an Sasainn, tuath aig a' mhullach",
    "People in England have hoped, prayed, and told stories for a very long time. We speak of that with care.":
      "Tha daoine ann an Sasainn air a bhith an dòchas, ag ùrnaigh, agus ag innse sgeulachdan airson ùine mhòr. Bruidhnidh sinn air sin le cùram.",
    "Long ago, people buried their dead in barrows, which are mounds of earth.":
      "O chionn fhada, thiodhlaic daoine na mairbh ann an tulaich, a tha nan cnapan ùir.",
    "They also raised great stones. Stonehenge and Avebury still stand in Wiltshire.":
      "Thog iad clachan mòra cuideachd. Tha Stonehenge agus Avebury fhathast nan seasamh ann an Wiltshire.",
    "We are not sure what Stonehenge was for.": "Chan eil sinn cinnteach dè an adhbhar a bha aig Stonehenge.",
    "Read about Stonehenge": "Leugh mu Stonehenge",
    "Some Christians in England are remembered as saints.": "Tha cuid de Chrìosdaidhean ann an Sasainn air an cuimhneachadh mar naoimh.",
    "Alban is remembered at St Albans. Cuthbert is remembered in the north. Hilda led the abbey at Whitby.":
      "Tha Alban air a chuimhneachadh ann an St Albans. Tha Cuthbert air a chuimhneachadh sa cheann a tuath. Stiùir Hilda an abaid ann an Whitby.",
    "Julian of Norwich wrote about God's love from a small room by a church.":
      "Sgrìobh Julian of Norwich mu ghràdh Dhè à seòmar beag ri taobh eaglais.",
    "You do not have to share their faith to read their story kindly.":
      "Cha leig thu leas an creideamh aca a roinn gus an sgeul a leughadh gu coibhneil.",
    "All Saints' Church at Earls Barton, a parish church in Northamptonshire":
      "Eaglais All Saints ann an Earls Barton, eaglais paraiste ann an Northamptonshire",
    "A parish church often stands in the middle of a village. It may have a tower, a font, and a churchyard.":
      "Bidh eaglais paraiste gu tric ann am meadhan baile beag. Faodaidh tùr, amar baistidh, agus cladh a bhith innte.",
    "People have been baptised, married, and buried there for centuries.":
      "Tha daoine air am baisteadh, air am pòsadh, agus air an tiodhlacadh an sin fad linntean.",
    "Chapels, synagogues, mosques, mandirs, and gurdwaras are part of England too.":
      "Tha seipealan, sionagogan, moscan, mandirs, agus gurdwaras nam pàirt de Shasainn cuideachd.",
    "A neighbour's holy place is a place to respect.": "Is e àite naomh nàbaidh àite ri urramachadh.",
    "Dragons, Robin Hood, and King Arthur are stories.": "Tha dragain, Robin Hood, agus Rìgh Arthur nan sgeulachdan.",
    "People have told them for a long time. They are not reports we can check.":
      "Tha daoine air a bhith gan innse airson ùine mhòr. Chan e aithisgean a ghabhas sgrùdadh a th' annta.",
    "Sherwood Forest is a real wood. The adventures of Robin Hood are a tale set there.":
      "Is e fìor choille a th' ann an Sherwood Forest. Is e sgeul a tha air a suidheachadh an sin a th' ann an tachartasan Robin Hood.",
    "A dragon on a flag or in a church window is a picture from a story, including the tale of George.":
      "Is e dealbh à sgeul a th' ann an dràgon air bratach no ann an uinneag eaglais, a' gabhail a-steach sgeul George.",
    "Back to the county map": "Air ais gu mapa nan siorrachdan",
    "England has its own story. These pages use short sentences, real places, and people you can name.":
      "Tha a sgeul fhèin aig Sasainn. Tha seantansan goirid, àiteachan fìor, agus daoine as urrainn dhut ainmeachadh air na duilleagan seo.",
    "The white cliffs of Dover": "Bearraidhean geala Dover",
    "Chalk cliffs, moors, fens, and a long coast. The white cliffs of Dover look out to sea. The lakes of Cumbria sit in the hills.":
      "Bearraidhean cailce, mòintichean, feanntagan, agus cladach fada. Tha bearraidhean geala Dover a' coimhead a-mach chun na mara. Tha lochan Chumbria anns na cnuic.",
    "Warwick Castle": "Caisteal Warwick",
    "Castles kept towns and river crossings. Warwick Castle still stands by the Avon. Durham's castle shares a hill with the cathedral.":
      "Chum caistealan bailtean agus àiteachan-dol-thairis aibhne. Tha Caisteal Warwick fhathast ri taobh an Avon. Tha caisteal Durham a' roinn cnoc leis a' chathair-eaglais.",
    "Parish churches sit in many villages. England is also home to other faiths. Stories such as Arthur and Robin Hood are tales, not reports we can check.":
      "Tha eaglaisean paraiste ann am mòran bhailtean beaga. Tha creideamhan eile ann an Sasainn cuideachd. Is e sgeulachdan a th' ann an Arthur agus Robin Hood, chan e aithisgean a ghabhas dearbhadh.",
    "Stone cottages in an English village": "Bothain cloiche ann am baile beag Sasannach",
    "People live in villages, towns, and cities. They go to school, to shops, and to parks. Stone cottages, terraces, and new streets are all part of England.":
      "Tha daoine a' fuireach ann am bailtean beaga, bailtean, agus cathraichean. Thèid iad don sgoil, do bhùthan, agus do phàircean. Tha bothain cloiche, taighean-sreatha, agus sràidean ùra uile nam pàirt de Shasainn.",
    "All ({n})": "Uile ({n})",
    "{label} ({n})": "{label} ({n})",
    "These are the ceremonial counties of England. There are {n}. Tap a shape, including the small ones.":
      "Seo siorrachdan deas-ghnàthach Shasainn. Tha {n} ann. Brùth cumadh, eadhon na cumaidhean beaga.",
    "{n} questions about who, where, when, and what people made. Play alone, or in class teams. A tied team round ends with one sudden-death question.":
      "{n} ceistean mu cò, càite, cuin, agus na rinn daoine. Cluich leat fhèin, no ann an sgiobaidhean clas. Ma tha na sgiobaidhean co-ionann, tha aon cheist mu dheireadh ann.",
    "None.": "Chan eil gin.",
    "Use these words in sentences about England. Look at the county pages if you need a fact.":
      "Cleachd na faclan seo ann an seantansan mu Shasainn. Seall air duilleagan nan siorrachdan ma tha feum agad air fìrinn.",
    "Draw a line from each person to a place on this site. The two lists are not in the same order.":
      "Tarraing loidhne bho gach neach gu àite air an làrach seo. Chan eil an dà liosta san aon òrdugh.",
    "Fill the gaps. The Time page can help you. Read from the older times towards now.":
      "Lìon na beàrnan. Cuidichidh duilleag na h-Ùine thu. Leugh o na linntean as sine a dh'ionnsaigh an-diugh.",
    "England has no anthem of its own. God Save the King belongs to the whole United Kingdom. Some people like to sing the hymn Jerusalem. Listen to a recording your teacher chooses. Talk about one instrument you hear, and one feeling in the music.":
      "Chan eil òran-nàiseanta aig Sasainn leatha fhèin. Buinidh God Save the King ris an Rìoghachd Aonaichte air fad. Is toil le cuid an laoidh Jerusalem a sheinn. Èist ri clàradh a thaghas an tidsear agad. Bruidhinn air aon ionnsramaid a chluinneas tu, agus air aon fhaireachdainn sa cheòl.",
    "Download the quiz": "Luchdaich a-nuas na ceistean",
    "This sheet has 200 questions. It has no answers.": "Tha 200 ceist air an duilleag seo. Chan eil freagairtean innte.",
  },
  cy: {
    "Ceremonial counties of England, north at the top": "Siroedd seremonïol Lloegr, y gogledd ar y brig",
    "Greater London and the City of London": "Llundain Fwyaf a Dinas Llundain",
    "County shapes are simplified from open boundary data. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. The City of London shape is © OpenStreetMap contributors.":
      "Mae siapiau'r siroedd wedi'u symleiddio o ddata ffiniau agored. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. Mae siâp Dinas Llundain yn © OpenStreetMap contributors.",
    "Places in England, north at the top": "Lleoedd yn Lloegr, y gogledd ar y brig",
    "People in England have hoped, prayed, and told stories for a very long time. We speak of that with care.":
      "Mae pobl yn Lloegr wedi gobeithio, gweddïo, ac adrodd straeon ers amser maith iawn. Rydym yn siarad am hynny'n ofalus.",
    "Long ago, people buried their dead in barrows, which are mounds of earth.":
      "Yn bell yn ôl, claddodd pobl eu meirw mewn crugiau, sef twmpathau o bridd.",
    "They also raised great stones. Stonehenge and Avebury still stand in Wiltshire.":
      "Codwyd cerrig mawr hefyd. Mae Stonehenge ac Avebury yn sefyll o hyd yn Wiltshire.",
    "We are not sure what Stonehenge was for.": "Nid ydym yn siŵr beth oedd pwrpas Stonehenge.",
    "Read about Stonehenge": "Darllen am Stonehenge",
    "Some Christians in England are remembered as saints.": "Cofir rhai Cristnogion yn Lloegr fel seintiau.",
    "Alban is remembered at St Albans. Cuthbert is remembered in the north. Hilda led the abbey at Whitby.":
      "Cofir Alban yn St Albans. Cofir Cuthbert yn y gogledd. Arweiniodd Hilda yr abaty yn Whitby.",
    "Julian of Norwich wrote about God's love from a small room by a church.":
      "Ysgrifennodd Julian of Norwich am gariad Duw o ystafell fach wrth eglwys.",
    "You do not have to share their faith to read their story kindly.":
      "Nid oes rhaid i chi rannu eu ffydd i ddarllen eu stori'n garedig.",
    "All Saints' Church at Earls Barton, a parish church in Northamptonshire":
      "Eglwys All Saints yn Earls Barton, eglwys plwyf yn Swydd Northampton",
    "A parish church often stands in the middle of a village. It may have a tower, a font, and a churchyard.":
      "Mae eglwys plwyf yn aml yng nghanol pentref. Gall fod ganddi dŵr, bedyddfaen, a mynwent.",
    "People have been baptised, married, and buried there for centuries.":
      "Mae pobl wedi cael eu bedyddio, eu priodi, a'u claddu yno ers canrifoedd.",
    "Chapels, synagogues, mosques, mandirs, and gurdwaras are part of England too.":
      "Mae capeli, synagogau, mosgiau, mandirs, a gurdwaras yn rhan o Loegr hefyd.",
    "A neighbour's holy place is a place to respect.": "Mae lle sanctaidd cymydog yn lle i'w barchu.",
    "Dragons, Robin Hood, and King Arthur are stories.": "Straeon yw dreigiau, Robin Hood, a'r Brenin Arthur.",
    "People have told them for a long time. They are not reports we can check.":
      "Mae pobl wedi eu hadrodd ers amser maith. Nid adroddiadau y gallwn eu gwirio ydyn nhw.",
    "Sherwood Forest is a real wood. The adventures of Robin Hood are a tale set there.":
      "Coedwig go iawn yw Sherwood Forest. Mae anturiaethau Robin Hood yn stori sydd wedi'i gosod yno.",
    "A dragon on a flag or in a church window is a picture from a story, including the tale of George.":
      "Mae draig ar faner neu mewn ffenestr eglwys yn lun o stori, gan gynnwys stori George.",
    "Back to the county map": "Yn ôl i fap y siroedd",
    "England has its own story. These pages use short sentences, real places, and people you can name.":
      "Mae gan Loegr ei stori ei hun. Mae'r tudalennau hyn yn defnyddio brawddegau byr, lleoedd go iawn, a phobl y gallwch eu henwi.",
    "The white cliffs of Dover": "Clogwyni gwynion Dover",
    "Chalk cliffs, moors, fens, and a long coast. The white cliffs of Dover look out to sea. The lakes of Cumbria sit in the hills.":
      "Clogwyni sialc, rhosydd, ffeni, ac arfordir hir. Mae clogwyni gwynion Dover yn edrych dros y môr. Mae llynnoedd Cumbria yn y bryniau.",
    "Warwick Castle": "Castell Warwick",
    "Castles kept towns and river crossings. Warwick Castle still stands by the Avon. Durham's castle shares a hill with the cathedral.":
      "Roedd cestyll yn gwarchod trefi a chroesfannau afonydd. Mae Castell Warwick yn sefyll o hyd wrth yr Avon. Mae castell Durham yn rhannu bryn â'r gadeirlan.",
    "Parish churches sit in many villages. England is also home to other faiths. Stories such as Arthur and Robin Hood are tales, not reports we can check.":
      "Mae eglwysi plwyf mewn llawer o bentrefi. Mae ffyddiau eraill yn Lloegr hefyd. Straeon yw Arthur a Robin Hood, nid adroddiadau y gallwn eu gwirio.",
    "Stone cottages in an English village": "Bythynnod carreg mewn pentref Seisnig",
    "People live in villages, towns, and cities. They go to school, to shops, and to parks. Stone cottages, terraces, and new streets are all part of England.":
      "Mae pobl yn byw mewn pentrefi, trefi, a dinasoedd. Maen nhw'n mynd i'r ysgol, i siopau, ac i barciau. Mae bythynnod carreg, tai teras, a strydoedd newydd i gyd yn rhan o Loegr.",
    "All ({n})": "Pawb ({n})",
    "{label} ({n})": "{label} ({n})",
    "These are the ceremonial counties of England. There are {n}. Tap a shape, including the small ones.":
      "Dyma siroedd seremonïol Lloegr. Mae {n}. Tapiwch siâp, gan gynnwys y rhai bach.",
    "{n} questions about who, where, when, and what people made. Play alone, or in class teams. A tied team round ends with one sudden-death question.":
      "{n} cwestiwn am bwy, ble, pryd, a beth wnaeth pobl. Chwaraewch ar eich pen eich hun, neu mewn timau dosbarth. Os yw'r timau'n gyfartal, mae un cwestiwn olaf.",
    "None.": "Dim.",
    "Use these words in sentences about England. Look at the county pages if you need a fact.":
      "Defnyddiwch y geiriau hyn mewn brawddegau am Loegr. Edrychwch ar dudalennau'r siroedd os oes angen ffaith arnoch.",
    "Draw a line from each person to a place on this site. The two lists are not in the same order.":
      "Tynnwch linell o bob person i le ar y wefan hon. Nid yw'r ddwy restr yn yr un drefn.",
    "Fill the gaps. The Time page can help you. Read from the older times towards now.":
      "Llenwch y bylchau. Gall tudalen Amser eich helpu. Darllenwch o'r amseroedd hynaf tuag at nawr.",
    "England has no anthem of its own. God Save the King belongs to the whole United Kingdom. Some people like to sing the hymn Jerusalem. Listen to a recording your teacher chooses. Talk about one instrument you hear, and one feeling in the music.":
      "Nid oes gan Loegr anthem ar ei phen ei hun. Mae God Save the King yn perthyn i'r Deyrnas Unedig gyfan. Mae rhai pobl yn hoffi canu'r emyn Jerusalem. Gwrandewch ar recordiad y mae eich athro yn ei ddewis. Siaradwch am un offeryn a glywch, ac am un teimlad yn y gerddoriaeth.",
    "Download the quiz": "Lawrlwytho'r cwis",
    "This sheet has 200 questions. It has no answers.": "Mae 200 cwestiwn ar y daflen hon. Nid oes atebion arni.",
  },
  ga: {
    "Ceremonial counties of England, north at the top": "Contaetha deasghnácha Shasana, an tuaisceart ag an mbarr",
    "Greater London and the City of London": "Londain Mhór agus Cathair Londan",
    "County shapes are simplified from open boundary data. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. The City of London shape is © OpenStreetMap contributors.":
      "Tá cruthanna na gcontaetha simplithe ó shonraí teorann oscailte. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. Is © OpenStreetMap contributors cruth Chathair Londan.",
    "Places in England, north at the top": "Áiteanna i Sasana, an tuaisceart ag an mbarr",
    "People in England have hoped, prayed, and told stories for a very long time. We speak of that with care.":
      "Tá daoine i Sasana ag súil, ag guí, agus ag insint scéalta le fada an lá. Labhraímid faoi sin go cúramach.",
    "Long ago, people buried their dead in barrows, which are mounds of earth.":
      "Fadó, chuir daoine na mairbh i dtuamaí, is é sin dumhaí cré.",
    "They also raised great stones. Stonehenge and Avebury still stand in Wiltshire.":
      "Thóg siad clocha móra freisin. Tá Stonehenge agus Avebury fós ina seasamh i Wiltshire.",
    "We are not sure what Stonehenge was for.": "Níl a fhios againn cén fáth a raibh Stonehenge ann.",
    "Read about Stonehenge": "Léigh faoi Stonehenge",
    "Some Christians in England are remembered as saints.": "Cuimhnítear ar roinnt Críostaithe i Sasana mar naoimh.",
    "Alban is remembered at St Albans. Cuthbert is remembered in the north. Hilda led the abbey at Whitby.":
      "Cuimhnítear ar Alban i St Albans. Cuimhnítear ar Cuthbert sa tuaisceart. Bhí Hilda i gceannas ar an mhainistir i Whitby.",
    "Julian of Norwich wrote about God's love from a small room by a church.":
      "Scríobh Julian of Norwich faoi ghrá Dé ó sheomra beag le hais eaglaise.",
    "You do not have to share their faith to read their story kindly.":
      "Ní gá duit a gcreideamh a roinnt chun a scéal a léamh go cineálta.",
    "All Saints' Church at Earls Barton, a parish church in Northamptonshire":
      "Eaglais All Saints in Earls Barton, eaglais pharóiste i Northamptonshire",
    "A parish church often stands in the middle of a village. It may have a tower, a font, and a churchyard.":
      "Bíonn eaglais pharóiste go minic i lár sráidbhaile. D'fhéadfadh túr, babhtais, agus reilig a bheith aici.",
    "People have been baptised, married, and buried there for centuries.":
      "Tá daoine á mbaisteadh, á bpósadh, agus á gcur ansin leis na cianta.",
    "Chapels, synagogues, mosques, mandirs, and gurdwaras are part of England too.":
      "Is cuid de Shasana iad séipéil, sionagóga, moscanna, mandirs, agus gurdwaras freisin.",
    "A neighbour's holy place is a place to respect.": "Is áit le meas a bheith uirthi áit naofa an chomharsan.",
    "Dragons, Robin Hood, and King Arthur are stories.": "Scéalta is ea dragain, Robin Hood, agus an Rí Arthur.",
    "People have told them for a long time. They are not reports we can check.":
      "Tá daoine á n-insint le fada. Ní tuairiscí iad is féidir linn a sheiceáil.",
    "Sherwood Forest is a real wood. The adventures of Robin Hood are a tale set there.":
      "Fíorchoill is ea Sherwood Forest. Is scéal atá suite ansin eachtraí Robin Hood.",
    "A dragon on a flag or in a church window is a picture from a story, including the tale of George.":
      "Is pictiúr ó scéal é dragan ar bhratach nó i bhfuinneog eaglaise, scéal George ina measc.",
    "Back to the county map": "Ar ais go léarscáil na gcontaetha",
    "England has its own story. These pages use short sentences, real places, and people you can name.":
      "Tá a scéal féin ag Sasana. Úsáideann na leathanaigh seo abairtí gearra, áiteanna fíor, agus daoine is féidir leat a ainmniú.",
    "The white cliffs of Dover": "Aillte bána Dover",
    "Chalk cliffs, moors, fens, and a long coast. The white cliffs of Dover look out to sea. The lakes of Cumbria sit in the hills.":
      "Aillte cailce, móinteáin, riasca, agus cósta fada. Breathnaíonn aillte bána Dover amach ar an bhfarraige. Tá lochanna Chumbria sna cnoic.",
    "Warwick Castle": "Caisleán Warwick",
    "Castles kept towns and river crossings. Warwick Castle still stands by the Avon. Durham's castle shares a hill with the cathedral.":
      "Choinnigh caisleáin bailte agus trasrianta abhann. Tá Caisleán Warwick fós cois na hAvon. Roinneann caisleán Durham cnoc leis an ardeaglais.",
    "Parish churches sit in many villages. England is also home to other faiths. Stories such as Arthur and Robin Hood are tales, not reports we can check.":
      "Tá eaglaisí paróiste i mórán sráidbhailte. Tá creidimh eile i Sasana freisin. Scéalta is ea Arthur agus Robin Hood, ní tuairiscí is féidir a sheiceáil.",
    "Stone cottages in an English village": "Tithe cloiche i sráidbhaile Sasanach",
    "People live in villages, towns, and cities. They go to school, to shops, and to parks. Stone cottages, terraces, and new streets are all part of England.":
      "Cónaíonn daoine i sráidbhailte, i mbailte, agus i gcathracha. Téann siad ar scoil, chuig siopaí, agus chuig páirceanna. Is cuid de Shasana iad tithe cloiche, tithe sraithe, agus sráideanna nua.",
    "All ({n})": "Uile ({n})",
    "{label} ({n})": "{label} ({n})",
    "These are the ceremonial counties of England. There are {n}. Tap a shape, including the small ones.":
      "Seo iad contaetha deasghnácha Shasana. Tá {n} ann. Tapáil cruth, na cinn bheaga san áireamh.",
    "{n} questions about who, where, when, and what people made. Play alone, or in class teams. A tied team round ends with one sudden-death question.":
      "{n} ceist faoi cé, cá, cathain, agus cad a rinne daoine. Imir leat féin, nó i bhfoirne ranga. Má tá na foirne cothrom, tá ceist dheiridh amháin ann.",
    "None.": "Níl aon cheann.",
    "Use these words in sentences about England. Look at the county pages if you need a fact.":
      "Úsáid na focail seo in abairtí faoi Shasana. Féach ar leathanaigh na gcontaetha má tá fíric uait.",
    "Draw a line from each person to a place on this site. The two lists are not in the same order.":
      "Tarraing líne ó gach duine go háit ar an suíomh seo. Níl an dá liosta san ord céanna.",
    "Fill the gaps. The Time page can help you. Read from the older times towards now.":
      "Líon na bearnaí. Cabhróidh leathanach na hAma leat. Léigh ó na hamanna is sine i dtreo an lae inniu.",
    "England has no anthem of its own. God Save the King belongs to the whole United Kingdom. Some people like to sing the hymn Jerusalem. Listen to a recording your teacher chooses. Talk about one instrument you hear, and one feeling in the music.":
      "Níl amhrán náisiúnta ar leith ag Sasana. Baineann God Save the King leis an Ríocht Aontaithe ar fad. Is maith le daoine áirithe an iomann Jerusalem a chanadh. Éist le taifead a roghnaíonn do mhúinteoir. Labhair faoi ionstraim amháin a chloiseann tú, agus faoi mhothú amháin sa cheol.",
    "Download the quiz": "Íoslódáil an tráth na gceist",
    "This sheet has 200 questions. It has no answers.": "Tá 200 ceist ar an mbileog seo. Níl freagraí uirthi.",
  },
  fr: {
    "Ceremonial counties of England, north at the top": "Comtés cérémoniels d'Angleterre, le nord en haut",
    "Greater London and the City of London": "Le Grand Londres et la Cité de Londres",
    "County shapes are simplified from open boundary data. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. The City of London shape is © OpenStreetMap contributors.":
      "Les formes des comtés sont simplifiées à partir de données de limites ouvertes. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. La forme de la Cité de Londres est © OpenStreetMap contributors.",
    "Places in England, north at the top": "Lieux en Angleterre, le nord en haut",
    "People in England have hoped, prayed, and told stories for a very long time. We speak of that with care.":
      "En Angleterre, les gens espèrent, prient et racontent des histoires depuis très longtemps. Nous en parlons avec soin.",
    "Long ago, people buried their dead in barrows, which are mounds of earth.":
      "Il y a longtemps, on enterrait les morts dans des tumulus, des monticules de terre.",
    "They also raised great stones. Stonehenge and Avebury still stand in Wiltshire.":
      "On a aussi dressé de grandes pierres. Stonehenge et Avebury sont toujours là, dans le Wiltshire.",
    "We are not sure what Stonehenge was for.": "Nous ne savons pas à quoi servait Stonehenge.",
    "Read about Stonehenge": "Lire la page de Stonehenge",
    "Some Christians in England are remembered as saints.": "Certains chrétiens d'Angleterre sont rappelés comme des saints.",
    "Alban is remembered at St Albans. Cuthbert is remembered in the north. Hilda led the abbey at Whitby.":
      "On se souvient d'Alban à St Albans. On se souvient de Cuthbert dans le nord. Hilda dirigeait l'abbaye de Whitby.",
    "Julian of Norwich wrote about God's love from a small room by a church.":
      "Julian of Norwich a écrit sur l'amour de Dieu depuis une petite pièce près d'une église.",
    "You do not have to share their faith to read their story kindly.":
      "Tu n'as pas besoin de partager leur foi pour lire leur histoire avec bonté.",
    "All Saints' Church at Earls Barton, a parish church in Northamptonshire":
      "L'église All Saints à Earls Barton, une église de paroisse dans le Northamptonshire",
    "A parish church often stands in the middle of a village. It may have a tower, a font, and a churchyard.":
      "Une église de paroisse est souvent au milieu d'un village. Elle peut avoir une tour, des fonts baptismaux et un cimetière.",
    "People have been baptised, married, and buried there for centuries.":
      "On y baptise, on s'y marie et on y enterre depuis des siècles.",
    "Chapels, synagogues, mosques, mandirs, and gurdwaras are part of England too.":
      "Des chapelles, des synagogues, des mosquées, des mandirs et des gurdwaras font aussi partie de l'Angleterre.",
    "A neighbour's holy place is a place to respect.": "Le lieu saint d'un voisin est un lieu à respecter.",
    "Dragons, Robin Hood, and King Arthur are stories.": "Les dragons, Robin Hood et le roi Arthur sont des histoires.",
    "People have told them for a long time. They are not reports we can check.":
      "On les raconte depuis longtemps. Ce ne sont pas des rapports que l'on peut vérifier.",
    "Sherwood Forest is a real wood. The adventures of Robin Hood are a tale set there.":
      "La forêt de Sherwood est un vrai bois. Les aventures de Robin Hood sont un récit qui s'y passe.",
    "A dragon on a flag or in a church window is a picture from a story, including the tale of George.":
      "Un dragon sur un drapeau ou dans une fenêtre d'église est une image d'une histoire, dont celle de George.",
    "Back to the county map": "Retour à la carte des comtés",
    "England has its own story. These pages use short sentences, real places, and people you can name.":
      "L'Angleterre a sa propre histoire. Ces pages utilisent des phrases courtes, de vrais lieux et des personnes que tu peux nommer.",
    "The white cliffs of Dover": "Les falaises blanches de Douvres",
    "Chalk cliffs, moors, fens, and a long coast. The white cliffs of Dover look out to sea. The lakes of Cumbria sit in the hills.":
      "Falaises de craie, landes, fagnes et une longue côte. Les falaises blanches de Douvres regardent la mer. Les lacs de Cumbria sont dans les collines.",
    "Warwick Castle": "Le château de Warwick",
    "Castles kept towns and river crossings. Warwick Castle still stands by the Avon. Durham's castle shares a hill with the cathedral.":
      "Les châteaux gardaient les villes et les passages de rivière. Le château de Warwick est toujours au bord de l'Avon. Le château de Durham partage une colline avec la cathédrale.",
    "Parish churches sit in many villages. England is also home to other faiths. Stories such as Arthur and Robin Hood are tales, not reports we can check.":
      "Des églises paroissiales se trouvent dans beaucoup de villages. L'Angleterre abrite aussi d'autres croyances. Les récits d'Arthur et de Robin des Bois sont des contes, pas des rapports que l'on peut vérifier.",
    "Stone cottages in an English village": "Maisons de pierre dans un village anglais",
    "People live in villages, towns, and cities. They go to school, to shops, and to parks. Stone cottages, terraces, and new streets are all part of England.":
      "Les gens vivent dans des villages, des villes et des cités. Ils vont à l'école, aux magasins et dans les parcs. Maisons de pierre, maisons en rangée et rues neuves font tous partie de l'Angleterre.",
    "All ({n})": "Tous ({n})",
    "{label} ({n})": "{label} ({n})",
    "These are the ceremonial counties of England. There are {n}. Tap a shape, including the small ones.":
      "Voici les comtés cérémoniels d'Angleterre. Il y en a {n}. Touche une forme, y compris les petites.",
    "{n} questions about who, where, when, and what people made. Play alone, or in class teams. A tied team round ends with one sudden-death question.":
      "{n} questions sur qui, où, quand, et ce que les gens ont fait. Joue seul, ou en équipes de classe. Si les équipes sont à égalité, une question finale les départage.",
    "None.": "Aucun.",
    "Use these words in sentences about England. Look at the county pages if you need a fact.":
      "Utilise ces mots dans des phrases sur l'Angleterre. Regarde les pages des comtés si tu as besoin d'un fait.",
    "Draw a line from each person to a place on this site. The two lists are not in the same order.":
      "Relie chaque personne à un lieu de ce site. Les deux listes ne sont pas dans le même ordre.",
    "Fill the gaps. The Time page can help you. Read from the older times towards now.":
      "Remplis les trous. La page Temps peut t'aider. Lis des temps les plus anciens vers maintenant.",
    "England has no anthem of its own. God Save the King belongs to the whole United Kingdom. Some people like to sing the hymn Jerusalem. Listen to a recording your teacher chooses. Talk about one instrument you hear, and one feeling in the music.":
      "L'Angleterre n'a pas d'hymne à elle seule. God Save the King appartient à tout le Royaume-Uni. Certaines personnes aiment chanter le cantique Jerusalem. Écoute un enregistrement choisi par ton enseignant. Parle d'un instrument que tu entends, et d'un sentiment dans la musique.",
    "Download the quiz": "Télécharger le quiz",
    "This sheet has 200 questions. It has no answers.": "Cette feuille a 200 questions. Elle n'a pas les réponses.",
  },
  it: {
    "Ceremonial counties of England, north at the top": "Contee cerimoniali d'Inghilterra, il nord in alto",
    "Greater London and the City of London": "La Grande Londra e la City di Londra",
    "County shapes are simplified from open boundary data. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. The City of London shape is © OpenStreetMap contributors.":
      "Le forme delle contee sono semplificate da dati aperti sui confini. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. La forma della City di Londra è © OpenStreetMap contributors.",
    "Places in England, north at the top": "Luoghi in Inghilterra, il nord in alto",
    "People in England have hoped, prayed, and told stories for a very long time. We speak of that with care.":
      "In Inghilterra le persone sperano, pregano e raccontano storie da moltissimo tempo. Ne parliamo con cura.",
    "Long ago, people buried their dead in barrows, which are mounds of earth.":
      "Tanto tempo fa, si seppellivano i morti nei tumuli, che sono mucchi di terra.",
    "They also raised great stones. Stonehenge and Avebury still stand in Wiltshire.":
      "Hanno anche alzato grandi pietre. Stonehenge e Avebury sono ancora in piedi nel Wiltshire.",
    "We are not sure what Stonehenge was for.": "Non siamo sicuri a che cosa servisse Stonehenge.",
    "Read about Stonehenge": "Leggi di Stonehenge",
    "Some Christians in England are remembered as saints.": "Alcuni cristiani in Inghilterra sono ricordati come santi.",
    "Alban is remembered at St Albans. Cuthbert is remembered in the north. Hilda led the abbey at Whitby.":
      "Alban è ricordato a St Albans. Cuthbert è ricordato nel nord. Hilda guidava l'abbazia di Whitby.",
    "Julian of Norwich wrote about God's love from a small room by a church.":
      "Julian of Norwich ha scritto dell'amore di Dio da una piccola stanza vicino a una chiesa.",
    "You do not have to share their faith to read their story kindly.":
      "Non devi condividere la loro fede per leggere la loro storia con gentilezza.",
    "All Saints' Church at Earls Barton, a parish church in Northamptonshire":
      "La chiesa di All Saints a Earls Barton, una chiesa parrocchiale nel Northamptonshire",
    "A parish church often stands in the middle of a village. It may have a tower, a font, and a churchyard.":
      "Una chiesa parrocchiale sta spesso in mezzo a un villaggio. Può avere una torre, un fonte battesimale e un cimitero.",
    "People have been baptised, married, and buried there for centuries.":
      "Lì si battezza, ci si sposa e si viene sepolti da secoli.",
    "Chapels, synagogues, mosques, mandirs, and gurdwaras are part of England too.":
      "Cappelle, sinagoghe, moschee, mandir e gurdwara fanno parte dell'Inghilterra.",
    "A neighbour's holy place is a place to respect.": "Il luogo sacro di un vicino è un luogo da rispettare.",
    "Dragons, Robin Hood, and King Arthur are stories.": "Draghi, Robin Hood e re Artù sono storie.",
    "People have told them for a long time. They are not reports we can check.":
      "La gente le racconta da tanto tempo. Non sono resoconti che possiamo verificare.",
    "Sherwood Forest is a real wood. The adventures of Robin Hood are a tale set there.":
      "La foresta di Sherwood è un bosco vero. Le avventure di Robin Hood sono un racconto ambientato lì.",
    "A dragon on a flag or in a church window is a picture from a story, including the tale of George.":
      "Un drago su una bandiera o in una vetrata è un'immagine di una storia, compresa quella di George.",
    "Back to the county map": "Torna alla mappa delle contee",
    "England has its own story. These pages use short sentences, real places, and people you can name.":
      "L'Inghilterra ha una storia sua. Queste pagine usano frasi corte, luoghi veri e persone che puoi nominare.",
    "The white cliffs of Dover": "Le bianche scogliere di Dover",
    "Chalk cliffs, moors, fens, and a long coast. The white cliffs of Dover look out to sea. The lakes of Cumbria sit in the hills.":
      "Scogliere di gesso, brughiere, paludi e una costa lunga. Le bianche scogliere di Dover guardano il mare. I laghi della Cumbria stanno tra le colline.",
    "Warwick Castle": "Il castello di Warwick",
    "Castles kept towns and river crossings. Warwick Castle still stands by the Avon. Durham's castle shares a hill with the cathedral.":
      "I castelli custodivano città e passaggi sul fiume. Il castello di Warwick è ancora sull'Avon. Il castello di Durham divide una collina con la cattedrale.",
    "Parish churches sit in many villages. England is also home to other faiths. Stories such as Arthur and Robin Hood are tales, not reports we can check.":
      "Le chiese parrocchiali stanno in molti villaggi. In Inghilterra ci sono anche altre fedi. I racconti di Artù e Robin Hood sono storie, non resoconti che possiamo controllare.",
    "Stone cottages in an English village": "Cottages di pietra in un villaggio inglese",
    "People live in villages, towns, and cities. They go to school, to shops, and to parks. Stone cottages, terraces, and new streets are all part of England.":
      "La gente vive in villaggi, paesi e città. Va a scuola, nei negozi e nei parchi. Cottages di pietra, case a schiera e strade nuove fanno tutti parte dell'Inghilterra.",
    "All ({n})": "Tutti ({n})",
    "{label} ({n})": "{label} ({n})",
    "These are the ceremonial counties of England. There are {n}. Tap a shape, including the small ones.":
      "Queste sono le contee cerimoniali d'Inghilterra. Sono {n}. Tocca una forma, anche quelle piccole.",
    "{n} questions about who, where, when, and what people made. Play alone, or in class teams. A tied team round ends with one sudden-death question.":
      "{n} domande su chi, dove, quando e che cosa hanno fatto le persone. Gioca da solo, o in squadre di classe. Se le squadre sono pari, una domanda finale le separa.",
    "None.": "Nessuno.",
    "Use these words in sentences about England. Look at the county pages if you need a fact.":
      "Usa queste parole in frasi sull'Inghilterra. Guarda le pagine delle contee se ti serve un fatto.",
    "Draw a line from each person to a place on this site. The two lists are not in the same order.":
      "Traccia una linea da ogni persona a un luogo di questo sito. Le due liste non sono nello stesso ordine.",
    "Fill the gaps. The Time page can help you. Read from the older times towards now.":
      "Riempi gli spazi. La pagina Tempo può aiutarti. Leggi dai tempi più antichi verso ora.",
    "England has no anthem of its own. God Save the King belongs to the whole United Kingdom. Some people like to sing the hymn Jerusalem. Listen to a recording your teacher chooses. Talk about one instrument you hear, and one feeling in the music.":
      "L'Inghilterra non ha un inno tutto suo. God Save the King appartiene a tutto il Regno Unito. Ad alcune persone piace cantare l'inno Jerusalem. Ascolta una registrazione scelta dal tuo insegnante. Parla di uno strumento che senti, e di un sentimento nella musica.",
    "Download the quiz": "Scarica il quiz",
    "This sheet has 200 questions. It has no answers.": "Questo foglio ha 200 domande. Non ha le risposte.",
  },
  es: {
    "Ceremonial counties of England, north at the top": "Condados ceremoniales de Inglaterra, el norte arriba",
    "Greater London and the City of London": "El Gran Londres y la City de Londres",
    "County shapes are simplified from open boundary data. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. The City of London shape is © OpenStreetMap contributors.":
      "Las formas de los condados están simplificadas a partir de datos abiertos de límites. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. La forma de la City de Londres es © OpenStreetMap contributors.",
    "Places in England, north at the top": "Lugares de Inglaterra, el norte arriba",
    "People in England have hoped, prayed, and told stories for a very long time. We speak of that with care.":
      "En Inglaterra la gente ha esperado, rezado y contado historias durante mucho tiempo. Hablamos de eso con cuidado.",
    "Long ago, people buried their dead in barrows, which are mounds of earth.":
      "Hace mucho, la gente enterraba a sus muertos en túmulos, que son montículos de tierra.",
    "They also raised great stones. Stonehenge and Avebury still stand in Wiltshire.":
      "También levantaron grandes piedras. Stonehenge y Avebury siguen en pie en Wiltshire.",
    "We are not sure what Stonehenge was for.": "No estamos seguros de para qué era Stonehenge.",
    "Read about Stonehenge": "Lee sobre Stonehenge",
    "Some Christians in England are remembered as saints.": "A algunos cristianos de Inglaterra se les recuerda como santos.",
    "Alban is remembered at St Albans. Cuthbert is remembered in the north. Hilda led the abbey at Whitby.":
      "Se recuerda a Alban en St Albans. Se recuerda a Cuthbert en el norte. Hilda dirigía la abadía de Whitby.",
    "Julian of Norwich wrote about God's love from a small room by a church.":
      "Julian of Norwich escribió sobre el amor de Dios desde una habitación pequeña junto a una iglesia.",
    "You do not have to share their faith to read their story kindly.":
      "No tienes que compartir su fe para leer su historia con amabilidad.",
    "All Saints' Church at Earls Barton, a parish church in Northamptonshire":
      "La iglesia de All Saints en Earls Barton, una iglesia parroquial en Northamptonshire",
    "A parish church often stands in the middle of a village. It may have a tower, a font, and a churchyard.":
      "Una iglesia parroquial suele estar en medio de un pueblo. Puede tener una torre, una pila bautismal y un cementerio.",
    "People have been baptised, married, and buried there for centuries.":
      "Allí se bautiza, se casa y se entierra desde hace siglos.",
    "Chapels, synagogues, mosques, mandirs, and gurdwaras are part of England too.":
      "Las capillas, las sinagogas, las mezquitas, los mandir y los gurdwara también son parte de Inglaterra.",
    "A neighbour's holy place is a place to respect.": "El lugar sagrado de un vecino es un lugar para respetar.",
    "Dragons, Robin Hood, and King Arthur are stories.": "Los dragones, Robin Hood y el rey Arturo son historias.",
    "People have told them for a long time. They are not reports we can check.":
      "La gente las cuenta desde hace mucho. No son informes que podamos comprobar.",
    "Sherwood Forest is a real wood. The adventures of Robin Hood are a tale set there.":
      "El bosque de Sherwood es un bosque de verdad. Las aventuras de Robin Hood son un relato situado allí.",
    "A dragon on a flag or in a church window is a picture from a story, including the tale of George.":
      "Un dragón en una bandera o en una ventana de iglesia es una imagen de una historia, incluida la de George.",
    "Back to the county map": "Volver al mapa de los condados",
    "England has its own story. These pages use short sentences, real places, and people you can name.":
      "Inglaterra tiene su propia historia. Estas páginas usan frases cortas, lugares reales y personas que puedes nombrar.",
    "The white cliffs of Dover": "Los acantilados blancos de Dover",
    "Chalk cliffs, moors, fens, and a long coast. The white cliffs of Dover look out to sea. The lakes of Cumbria sit in the hills.":
      "Acantilados de creta, páramos, humedales y una costa larga. Los acantilados blancos de Dover miran al mar. Los lagos de Cumbria están en las colinas.",
    "Warwick Castle": "El castillo de Warwick",
    "Castles kept towns and river crossings. Warwick Castle still stands by the Avon. Durham's castle shares a hill with the cathedral.":
      "Los castillos guardaban pueblos y pasos de río. El castillo de Warwick sigue junto al Avon. El castillo de Durham comparte una colina con la catedral.",
    "Parish churches sit in many villages. England is also home to other faiths. Stories such as Arthur and Robin Hood are tales, not reports we can check.":
      "Hay iglesias parroquiales en muchos pueblos. Inglaterra también es hogar de otras creencias. Los relatos de Arturo y Robin Hood son cuentos, no informes que podamos comprobar.",
    "Stone cottages in an English village": "Casas de piedra en un pueblo inglés",
    "People live in villages, towns, and cities. They go to school, to shops, and to parks. Stone cottages, terraces, and new streets are all part of England.":
      "La gente vive en pueblos, villas y ciudades. Va a la escuela, a las tiendas y a los parques. Las casas de piedra, las casas en hilera y las calles nuevas son parte de Inglaterra.",
    "All ({n})": "Todos ({n})",
    "{label} ({n})": "{label} ({n})",
    "These are the ceremonial counties of England. There are {n}. Tap a shape, including the small ones.":
      "Estos son los condados ceremoniales de Inglaterra. Hay {n}. Toca una forma, también las pequeñas.",
    "{n} questions about who, where, when, and what people made. Play alone, or in class teams. A tied team round ends with one sudden-death question.":
      "{n} preguntas sobre quién, dónde, cuándo y qué hizo la gente. Juega solo, o en equipos de clase. Si los equipos empatan, una pregunta final los separa.",
    "None.": "Ninguno.",
    "Use these words in sentences about England. Look at the county pages if you need a fact.":
      "Usa estas palabras en frases sobre Inglaterra. Mira las páginas de los condados si necesitas un dato.",
    "Draw a line from each person to a place on this site. The two lists are not in the same order.":
      "Traza una línea de cada persona a un lugar de este sitio. Las dos listas no están en el mismo orden.",
    "Fill the gaps. The Time page can help you. Read from the older times towards now.":
      "Rellena los huecos. La página Tiempo puede ayudarte. Lee desde los tiempos más antiguos hacia ahora.",
    "England has no anthem of its own. God Save the King belongs to the whole United Kingdom. Some people like to sing the hymn Jerusalem. Listen to a recording your teacher chooses. Talk about one instrument you hear, and one feeling in the music.":
      "Inglaterra no tiene un himno solo suyo. God Save the King pertenece a todo el Reino Unido. A algunas personas les gusta cantar el himno Jerusalem. Escucha una grabación que elija tu maestro. Habla de un instrumento que oigas y de un sentimiento en la música.",
    "Download the quiz": "Descargar el cuestionario",
    "This sheet has 200 questions. It has no answers.": "Esta ficha tiene 200 preguntas. No tiene las respuestas.",
  },
  ru: {
    "Ceremonial counties of England, north at the top": "Церемониальные графства Англии, север сверху",
    "Greater London and the City of London": "Большой Лондон и Сити",
    "County shapes are simplified from open boundary data. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. The City of London shape is © OpenStreetMap contributors.":
      "Формы графств упрощены по открытым данным о границах. © Crown copyright and database right, Ordnance Survey and the Office for National Statistics. Форма Сити — © OpenStreetMap contributors.",
    "Places in England, north at the top": "Места в Англии, север сверху",
    "People in England have hoped, prayed, and told stories for a very long time. We speak of that with care.":
      "Люди в Англии давно надеются, молятся и рассказывают истории. Мы говорим об этом бережно.",
    "Long ago, people buried their dead in barrows, which are mounds of earth.":
      "Давно люди хоронили умерших в курганах. Курган — это холм из земли.",
    "They also raised great stones. Stonehenge and Avebury still stand in Wiltshire.":
      "Они также ставили большие камни. Stonehenge и Avebury до сих пор стоят в Уилтшире.",
    "We are not sure what Stonehenge was for.": "Мы не уверены, для чего был Stonehenge.",
    "Read about Stonehenge": "Прочитать о Stonehenge",
    "Some Christians in England are remembered as saints.": "Некоторых христиан в Англии помнят как святых.",
    "Alban is remembered at St Albans. Cuthbert is remembered in the north. Hilda led the abbey at Whitby.":
      "Альбана помнят в Сент-Олбансе. Катберта помнят на севере. Хильда вела аббатство в Уитби.",
    "Julian of Norwich wrote about God's love from a small room by a church.":
      "Юлиана Нориджская писала о любви Бога из маленькой комнаты у церкви.",
    "You do not have to share their faith to read their story kindly.":
      "Не нужно разделять их веру, чтобы читать их историю доброжелательно.",
    "All Saints' Church at Earls Barton, a parish church in Northamptonshire":
      "Церковь Всех Святых в Эрлс-Бартоне, приходская церковь в Нортгемптоншире",
    "A parish church often stands in the middle of a village. It may have a tower, a font, and a churchyard.":
      "Приходская церковь часто стоит в середине деревни. У неё могут быть башня, купель и погост.",
    "People have been baptised, married, and buried there for centuries.":
      "Там крестят, венчают и хоронят уже много веков.",
    "Chapels, synagogues, mosques, mandirs, and gurdwaras are part of England too.":
      "Часовни, синагоги, мечети, мандиры и гурдвары тоже часть Англии.",
    "A neighbour's holy place is a place to respect.": "Святое место соседа — место, которое уважают.",
    "Dragons, Robin Hood, and King Arthur are stories.": "Драконы, Робин Гуд и король Артур — это истории.",
    "People have told them for a long time. They are not reports we can check.":
      "Их рассказывают давно. Это не отчёты, которые можно проверить.",
    "Sherwood Forest is a real wood. The adventures of Robin Hood are a tale set there.":
      "Шервудский лес — настоящий лес. Приключения Робина Гуда — рассказ, действие которого там.",
    "A dragon on a flag or in a church window is a picture from a story, including the tale of George.":
      "Дракон на флаге или в церковном окне — картинка из истории, в том числе из истории Георгия.",
    "Back to the county map": "Назад к карте графств",
    "England has its own story. These pages use short sentences, real places, and people you can name.":
      "У Англии своя история. На этих страницах короткие фразы, настоящие места и люди, которых можно назвать.",
    "The white cliffs of Dover": "Белые скалы Дувра",
    "Chalk cliffs, moors, fens, and a long coast. The white cliffs of Dover look out to sea. The lakes of Cumbria sit in the hills.":
      "Меловые скалы, пустоши, болота и длинный берег. Белые скалы Дувра смотрят на море. Озёра Камбрии лежат в холмах.",
    "Warwick Castle": "Уорикский замок",
    "Castles kept towns and river crossings. Warwick Castle still stands by the Avon. Durham's castle shares a hill with the cathedral.":
      "Замки хранили города и переправы. Уорикский замок до сих пор стоит у Эйвона. Замок Дарема делит холм с собором.",
    "Parish churches sit in many villages. England is also home to other faiths. Stories such as Arthur and Robin Hood are tales, not reports we can check.":
      "Приходские церкви стоят во многих деревнях. В Англии есть и другие веры. Рассказы об Артуре и Робине Гуде — это сказки, а не отчёты, которые можно проверить.",
    "Stone cottages in an English village": "Каменные дома в английской деревне",
    "People live in villages, towns, and cities. They go to school, to shops, and to parks. Stone cottages, terraces, and new streets are all part of England.":
      "Люди живут в деревнях, городках и городах. Они ходят в школу, в магазины и в парки. Каменные дома, ряды домов и новые улицы — всё это часть Англии.",
    "All ({n})": "Все ({n})",
    "{label} ({n})": "{label} ({n})",
    "These are the ceremonial counties of England. There are {n}. Tap a shape, including the small ones.":
      "Это церемониальные графства Англии. Их {n}. Нажмите фигуру, в том числе маленькую.",
    "{n} questions about who, where, when, and what people made. Play alone, or in class teams. A tied team round ends with one sudden-death question.":
      "{n} вопросов о том, кто, где, когда и что люди сделали. Играйте одни или командами класса. Если команды сравнялись, их разделяет один последний вопрос.",
    "None.": "Нет.",
    "Use these words in sentences about England. Look at the county pages if you need a fact.":
      "Используйте эти слова в предложениях об Англии. Если нужен факт, посмотрите страницы графств.",
    "Draw a line from each person to a place on this site. The two lists are not in the same order.":
      "Проведите линию от каждого человека к месту на этом сайте. Два списка идут не в одном порядке.",
    "Fill the gaps. The Time page can help you. Read from the older times towards now.":
      "Заполните пропуски. Страница «Время» может помочь. Читайте от давних времён к нашим.",
    "England has no anthem of its own. God Save the King belongs to the whole United Kingdom. Some people like to sing the hymn Jerusalem. Listen to a recording your teacher chooses. Talk about one instrument you hear, and one feeling in the music.":
      "У Англии нет своего гимна. God Save the King принадлежит всей Великобритании. Некоторым нравится петь гимн Jerusalem. Послушайте запись, которую выберет учитель. Расскажите об одном инструменте, который слышите, и об одном чувстве в музыке.",
    "Download the quiz": "Скачать викторину",
    "This sheet has 200 questions. It has no answers.": "На этом листе 200 вопросов. Ответов на нём нет.",
  },
};

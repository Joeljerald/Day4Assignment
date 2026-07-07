import { useRef } from "react";

const ScrollSPA = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="scroll-smooth">

      {/* Navbar */}
      <nav className="sticky top-0 bg-indigo-600 text-white shadow-lg z-50">
        <div className="flex justify-center gap-8 py-4">
          <button onClick={() => homeRef.current.scrollIntoView({ behavior: "smooth" })} className="hover:bg-indigo-700 px-5 py-2 rounded-lg transition">
            Home
          </button>

          <button onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" }) } className="hover:bg-indigo-700 px-5 py-2 rounded-lg transition">
            About
          </button>

          <button onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })} className="hover:bg-indigo-700 px-5 py-2 rounded-lg transition">
            Contact
          </button>
        </div>
      </nav>

      {/* Home */}
      <section ref={homeRef} className="h-screen bg-blue-100 flex flex-col items-center justify-center" >
        <h1 className="text-5xl font-bold text-blue-700 mb-6">Home</h1>

        <p className="text-xl text-gray-700 max-w-xl text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, iure libero! Facere, dolor tempore? Quos in et sit, ipsa minus aspernatur! Iste nam necessitatibus facere. Quia eos iure perferendis veritatis!
          Quibusdam, veritatis, quidem neque commodi tempora modi vero aliquam sint in velit perspiciatis ipsam magnam delectus doloribus officia quos laudantium quas molestias impedit sunt. Itaque deleniti dolorem numquam ad inventore.
          Nam modi consectetur ut, incidunt animi delectus repellat laborum. Nostrum, est excepturi animi doloremque molestiae iusto quod? Reiciendis distinctio adipisci totam, voluptatibus ipsa magnam eius reprehenderit, cupiditate expedita rem voluptas!
          Aspernatur accusantium blanditiis eaque exercitationem perferendis, voluptate aliquid, praesentium ducimus nulla ullam vitae doloremque quos! Nesciunt debitis itaque, voluptates, fugiat neque suscipit esse iure rem molestias ipsum soluta labore ullam.
          Quam deleniti unde soluta labore dolores minima porro in doloribus, et explicabo consequatur optio rem veritatis ducimus perspiciatis cumque aliquam dolorem velit. Vel a quo maxime dolores, aspernatur commodi provident?
          Quae, voluptates. Reprehenderit autem quasi eius sit odit sed velit molestiae accusantium? Incidunt ex fugiat similique quibusdam tempora eveniet non eligendi odio sunt nesciunt iusto ipsum, nihil harum unde ducimus?
          Dicta temporibus aperiam ab et quas aut explicabo, eaque dolorum, veniam placeat sunt. Expedita fuga voluptate repellat vero. Aspernatur rem eius id quidem alias quas laudantium enim animi. Ipsa, eius.
          Ex beatae nesciunt maxime voluptate, esse, perspiciatis quos voluptatem, deserunt sit minima sint inventore veritatis neque harum sapiente sed delectus eum culpa. Expedita et, dignissimos quas aliquid totam vel possimus.
          Nobis nulla dicta ad non aperiam perferendis amet enim minus accusamus! Possimus facere consectetur fugit rem, voluptas, quo perferendis perspiciatis voluptatem numquam sit expedita consequuntur voluptatibus animi assumenda impedit ipsum.
          Labore, harum excepturi. Culpa accusantium rerum ut vel excepturi quod cumque fugit atque facere doloribus optio aliquid voluptates quidem tempora, illo molestias soluta voluptatem quisquam tempore, dolorum temporibus quasi placeat!
          Sunt quasi laudantium quos labore. Ea repellendus vitae, aliquid quos quidem laborum est mollitia sit temporibus totam dolores deserunt in vel? Quibusdam, nostrum harum asperiores delectus et facere deserunt pariatur.
          Quis, aliquid dolorum. Labore voluptatem sed beatae quam excepturi ratione vitae est eos! Nulla corrupti ipsa repudiandae nostrum voluptatum omnis, autem delectus aut natus tempora. Totam atque porro nemo cum.
          Aut quidem ratione sed eveniet laborum numquam in accusantium! Dignissimos expedita doloremque modi id temporibus ex libero optio, dolor quos laudantium ipsa omnis voluptatem nesciunt iste assumenda illum veniam enim!
          Ea voluptatem dolorem at eius provident vel eveniet quasi, repellendus molestiae tempora reiciendis esse quis iusto optio quas sequi laboriosam facere nisi ut fugiat perferendis. Fugiat, iure. Hic, enim ea?
          Deleniti officiis eius quibusdam quia incidunt fuga recusandae nisi, aspernatur ex eum fugit est natus, ipsum libero corrupti at nesciunt optio ratione quod unde magnam et! Ex deleniti ipsam harum.
          Libero accusantium deserunt aperiam dolorum laudantium hic nisi deleniti ea, tempore quos veritatis sit temporibus eum, aspernatur reiciendis vero magnam rem nemo corporis alias optio atque voluptatum unde voluptatibus? Alias.
          Quisquam accusantium qui consequatur ratione sapiente, sed aliquid dolore quaerat aperiam velit, quae explicabo quam recusandae officiis excepturi quas, vel unde! Illum, deleniti. Quos labore ut ratione, quasi incidunt facilis?
          Ipsam ad inventore ratione beatae dolore unde ex? Aut, odit. Fugiat, unde fuga ipsa architecto sint iusto! Accusantium dolores exercitationem deleniti provident nisi earum quisquam ipsum assumenda molestiae, obcaecati optio.
          Corporis iure cumque voluptate doloremque eum quod mollitia et, consequuntur culpa eligendi sunt modi perferendis, laboriosam ea ab possimus, architecto nam. Dolor mollitia ipsa explicabo cupiditate neque ex voluptates totam.
          Accusantium ipsam adipisci quam? Laborum, suscipit fuga ab modi dolore officia ipsum dolores necessitatibus molestias amet dignissimos, corporis, illo enim maxime natus exercitationem! Tempora nihil ipsum exercitationem, praesentium consequatur eveniet!
        </p>
      </section>

      {/* About */}
      <section ref={aboutRef} className="h-screen bg-green-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-green-700 mb-6"> About</h1>

        <p className="text-xl text-gray-700 max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero, eos exercitationem quis distinctio veritatis neque! Aspernatur soluta perspiciatis reprehenderit, dignissimos quisquam sequi fuga distinctio vel necessitatibus quibusdam nisi enim?
          Itaque, repellendus accusamus, enim ea deleniti voluptates, ab quis dolores fugiat placeat nihil consequuntur beatae nam! Necessitatibus, exercitationem laborum animi voluptates doloremque eius laboriosam, adipisci quod, odio iusto error non.
          Voluptates, ratione delectus aperiam eligendi corrupti at qui, incidunt reiciendis alias magnam odit. Quae fugit, ipsam architecto modi incidunt asperiores hic aspernatur esse est, culpa totam iure enim fugiat pariatur!
          Optio laborum impedit odio earum ad unde, quod temporibus sint similique quis natus consectetur quidem facere repudiandae minima suscipit voluptas quam cupiditate consequuntur? Modi a voluptate deleniti in consequuntur magnam.
          Tempora provident veniam magnam alias, laudantium possimus harum doloribus incidunt, fugiat voluptas cupiditate. Incidunt, expedita. Doloribus ea qui ipsam, impedit vero modi. Dolores magni dignissimos itaque amet est cupiditate eos.
          Aspernatur velit, vero voluptate, quibusdam totam facilis est consequuntur temporibus non nulla eos recusandae voluptatem magnam voluptates! Non cupiditate eveniet magni libero quo commodi labore fugiat tenetur maiores, assumenda possimus.
          Maiores perspiciatis consequatur dolores dolorum unde, totam eveniet voluptatum porro? Nostrum a asperiores temporibus soluta aspernatur at, nulla in, quibusdam quas nemo provident iusto? Ipsa deserunt sed perferendis commodi dignissimos.
          Fugit reiciendis necessitatibus adipisci numquam praesentium voluptate, possimus veritatis unde, beatae doloremque magnam in soluta omnis a perferendis voluptas cum dolor! Animi dolor impedit dicta beatae! Consectetur voluptatibus at labore?
          Recusandae, illum. Labore nemo eum ab placeat voluptate sed inventore. Voluptatem non amet delectus mollitia nulla labore laudantium libero pariatur maxime iusto fugiat, nesciunt excepturi minima quam sit iste ea.
          Cum, rem laborum? Tempore doloribus officiis temporibus asperiores aspernatur aperiam consectetur, totam, eveniet ab, saepe provident voluptatem quas amet laudantium non unde iusto sed at iste! Illo illum obcaecati quidem.
          Laboriosam, ratione quos delectus esse repellendus rem repudiandae expedita architecto velit qui nisi neque libero, corporis iure voluptatem veniam vero? Enim maxime possimus, distinctio velit aliquam est sequi vel? Nemo.
          Dolorum laboriosam quibusdam voluptatum repellendus velit architecto ex laborum voluptate sit, officiis minima exercitationem minus consequatur quidem perferendis nulla magni deleniti corrupti ullam magnam necessitatibus cumque? Molestias nostrum id expedita.
          Ad libero molestias sit magni saepe laudantium laboriosam nemo, facere rerum iure consequatur totam aspernatur, doloremque architecto fuga. At, voluptates? Eligendi nam suscipit vel fugit! Velit at accusantium dignissimos non.
          Fugit a fugiat alias pariatur id aliquam. Et aperiam nemo assumenda necessitatibus quia maxime quisquam, deserunt provident atque! Quod perferendis vel iusto ab consectetur molestiae? Explicabo deleniti perspiciatis consequuntur libero.
          Molestiae a placeat et facere explicabo nihil maiores minima. Id nemo ipsum laborum saepe adipisci obcaecati expedita consectetur aliquid eius vero? Cum rem doloribus autem ea culpa vero temporibus unde.
          Nisi, perspiciatis numquam quo deserunt dolorum porro at reprehenderit repellat inventore possimus quae ipsa sapiente commodi optio quod nemo, vero perferendis temporibus odio fuga doloribus animi veniam qui! Dicta, magni!
          Velit facere accusantium maiores hic delectus distinctio corporis. Numquam, reiciendis atque perspiciatis nihil ea illo ducimus debitis, molestiae accusamus pariatur minus harum quaerat sed quas repudiandae ipsa. Vel, distinctio qui?
          Rem voluptatum dolorem beatae iste laboriosam eaque distinctio, veritatis assumenda, saepe sapiente quo dignissimos id eius eligendi cum nisi accusantium deserunt fuga. Neque eius quia repellendus distinctio vel, totam repellat.
          Mollitia, accusamus tempore aperiam impedit reiciendis vel totam, adipisci atque aliquam numquam officiis fuga, commodi quae incidunt. Iusto inventore odio illo officia ipsa amet expedita nostrum quidem, fugiat, ex accusamus.
          Molestiae, blanditiis vitae corrupti sed voluptate pariatur ducimus nisi rerum. Beatae adipisci, voluptatum blanditiis hic eum maiores nisi similique vitae ex optio veniam rerum quibusdam recusandae quaerat aperiam odio numquam!
          Quidem, qui illum? Accusantium, ratione at! Qui nisi corporis doloribus, aliquam temporibus voluptatem quos illo dolore rerum reprehenderit fuga praesentium molestias fugiat culpa adipisci mollitia sit modi cum totam alias!
          Id blanditiis quod repellendus nulla facere ratione animi adipisci assumenda, suscipit dolorum obcaecati, cum tempora commodi iure accusantium quidem error atque sequi saepe velit voluptatum. Doloremque veniam eos repudiandae totam.
          Amet iste ex qui vitae earum aliquam molestiae perferendis cumque tempora, provident expedita numquam neque explicabo officia alias magni corrupti! Tempore asperiores culpa non porro, molestiae dolore tenetur voluptatibus delectus?
          Quo non, voluptates, quibusdam tenetur debitis, vero doloribus voluptate laborum recusandae soluta error eum tempora odit corrupti quae nobis eveniet cumque ab modi? Tempore assumenda minima tempora qui quis rem.
          Ipsam quis officia corrupti fuga, expedita nam corporis error molestiae nostrum odit vitae dolorem. Minus aliquam esse a, quia sit cumque. Reprehenderit quo at doloribus expedita ex nisi aliquid quae.
          Culpa rerum sequi maxime tenetur! Quasi quaerat quod reprehenderit tenetur ad recusandae ex quia, provident assumenda voluptatem quis? Eos ad cupiditate rerum suscipit. Omnis at in aut expedita sit placeat.
          Autem debitis vitae sapiente? Eaque ab blanditiis enim numquam sint delectus quisquam harum odit, veniam tempore soluta natus quidem rerum vero nam, id perspiciatis incidunt eius rem excepturi vitae. Nam!
          Vel sit, in commodi eveniet tenetur consequatur nisi id, architecto dignissimos distinctio ab error eaque quae temporibus tempora adipisci dolores saepe quis enim omnis. Dolorum ad nesciunt aspernatur esse earum?
          Est, dignissimos nihil odio dolorum aut autem incidunt fuga, assumenda recusandae minus distinctio explicabo ipsum voluptatum natus suscipit optio quidem, earum ad vel quibusdam impedit. Nobis veritatis eos quae omnis.
          Laudantium nulla quidem eos, repudiandae, quam iure, aut asperiores in corporis commodi cumque earum illo accusamus odio temporibus obcaecati architecto eaque reprehenderit culpa iusto dolorum! Exercitationem eveniet pariatur quis praesentium?
          Nisi excepturi quas, dolores placeat architecto a. Nam pariatur nisi eos, sed facilis est nobis repudiandae natus distinctio id repellendus excepturi voluptate consequatur! Corrupti nam delectus inventore mollitia officia nemo.
          Reiciendis perspiciatis numquam natus explicabo veritatis architecto cupiditate pariatur cum sint excepturi inventore minus aspernatur illum fugit, odit voluptatem expedita ullam nemo quae veniam? Velit tempora accusamus aperiam sint facere!
          Veniam voluptatum fugiat sed libero vitae, magnam aperiam ex dolores pariatur dignissimos accusantium dicta dolorum autem repudiandae, expedita quidem non obcaecati. Eius eveniet perspiciatis saepe, totam deserunt rem asperiores sed!
          Sint officiis dignissimos, repudiandae earum rerum quaerat quos cupiditate quis, numquam consequuntur ratione est molestias quo cumque sit voluptates expedita voluptatem laudantium explicabo eaque minima tempore autem? Voluptatibus, repudiandae tempora?
          Numquam, expedita sit. Sequi quis vero nulla dolorum maxime praesentium! Possimus qui ipsam cupiditate! Illum iusto saepe corporis. Accusamus iusto et dicta culpa nostrum. Est eaque sunt aperiam voluptatem nobis.
          Quis, eum? Hic nostrum ea possimus placeat quos temporibus, totam, quis numquam nemo aspernatur recusandae rem aliquam eum! Cum dolorum neque cupiditate aliquam esse officiis quae fuga, mollitia vero numquam?
          Exercitationem assumenda voluptatem eligendi blanditiis facilis quas alias laboriosam, ducimus ex architecto? Nulla quibusdam culpa architecto dolores animi. Fugiat distinctio voluptatibus quisquam suscipit magnam porro soluta eveniet adipisci corporis exercitationem.
          Et, quisquam? Iure aut atque soluta rem quibusdam autem eaque, molestias quo eius alias in nostrum assumenda voluptate ut impedit officia consectetur minima quis, a maiores earum molestiae? Quis, accusamus.
          Optio laboriosam, soluta aliquid vitae eveniet sint. Recusandae tempore, quis veniam, dolor suscipit distinctio, obcaecati veritatis praesentium ipsum similique facere! Perspiciatis reiciendis quas minima officia vel voluptates veritatis ut doloribus!
          Dolores commodi aperiam illum culpa quisquam voluptates mollitia error minima quod quia rem dicta, perferendis veniam rerum? Cum explicabo odio magni quis porro modi velit, repudiandae debitis alias vel! Inventore!
          Velit labore sint dolorum culpa sed eos libero, quidem at autem qui eius, fugit minima placeat suscipit hic vero nisi? Animi, quis. Architecto voluptate placeat error possimus dicta illum facere.
          Neque illo voluptatum aperiam sapiente illum? Aliquam optio fugiat delectus. Earum dolores quaerat itaque beatae optio culpa consequatur quod dicta rem, deleniti libero nam ipsam autem nobis cupiditate impedit excepturi.
          Minima enim dolore mollitia reprehenderit suscipit, cumque quos, repudiandae aspernatur quasi aperiam assumenda ratione tempore ab amet exercitationem, officia impedit harum qui. Modi fuga, recusandae magni corporis et dolore alias.
          Ad esse quia nemo deserunt tenetur hic laudantium culpa rem sit! Eius, nemo molestiae tempore quis amet numquam similique incidunt eligendi accusamus ratione voluptate provident nobis harum doloribus placeat sapiente!
          Doloribus itaque molestias excepturi optio ipsam sit consequatur totam enim rerum consectetur qui, vitae labore ipsum eligendi in, asperiores culpa illo fugit? Beatae, minus! Vero quaerat saepe ex voluptates odit!
          Mollitia assumenda accusamus perspiciatis, rerum fugiat voluptate laboriosam! Cum veniam, voluptate autem quaerat, esse neque consequuntur ullam voluptates eaque praesentium porro sequi dolorem id culpa dolor laudantium provident nobis mollitia.
          Odit ducimus, rerum esse, magni porro recusandae mollitia minima ipsam repellat enim accusamus. Itaque exercitationem nulla tenetur recusandae et, similique, nihil ad nam ab totam libero unde assumenda alias. Sapiente?
          Ducimus pariatur error nobis reiciendis odio eligendi iure, laudantium, corporis aliquam officia sit reprehenderit in obcaecati voluptas quia ipsa ullam magni ratione repudiandae nisi explicabo. Cupiditate, necessitatibus! Debitis, qui quis.
          Esse in laboriosam itaque recusandae similique suscipit? Officiis eos fugit minima cumque ullam esse perferendis et saepe cum nobis repellendus sequi harum nemo laboriosam temporibus consequatur, deserunt beatae labore expedita.
          Et cupiditate, nihil minima voluptatum architecto quia iure voluptatibus expedita? Quis alias expedita officia dolor nulla libero voluptates atque suscipit eius dicta vitae, molestias pariatur ex debitis non amet accusamus.
          Nemo unde sunt, doloribus deleniti adipisci fugiat aliquam perspiciatis assumenda, atque tenetur expedita repudiandae. Magni officiis aut unde accusantium quod voluptatibus necessitatibus recusandae. Laudantium iusto esse consequuntur ducimus, labore dolor?
          Cum porro dolores, perspiciatis consectetur nam iusto quia neque magni eum, dolore sit veritatis, ut dolorum architecto perferendis pariatur facilis consequuntur iure consequatur commodi. Quaerat eveniet aspernatur a vero minus?
          Aut, magnam vitae. Consectetur quisquam adipisci asperiores totam aliquam numquam maxime officia laborum aliquid sint cum, accusamus nemo suscipit placeat tempora eos? Voluptas ipsum, quas quae suscipit commodi distinctio consequatur?
          Animi incidunt obcaecati, ex temporibus magni soluta harum nemo, neque ut, minima pariatur veniam atque. Labore voluptas aliquid exercitationem doloribus? Consectetur ullam quis tempore sint ipsa illo accusamus eos sunt.
          Qui maiores quaerat corporis laboriosam minus inventore dolores odio minima veniam distinctio et accusantium dolor debitis blanditiis explicabo aspernatur, aliquid impedit voluptates laborum magnam. Incidunt provident architecto voluptas quisquam vero.
          Fugiat ducimus sit dolorem eaque suscipit nam sed libero eveniet! Consequuntur ullam nisi vel fugit repellendus. Autem non quam aliquam. Aut illo maiores officia deserunt, quia iste similique quos nobis!
          Aliquam ducimus amet neque vitae eaque sunt laborum, laboriosam a adipisci itaque ipsam explicabo magni saepe quam pariatur, numquam animi quas delectus minus corrupti quisquam? Debitis ullam odio fuga molestiae?
          Reprehenderit sint dolore illum unde officiis alias, rem eum quidem, minima corporis perferendis doloremque, doloribus inventore omnis voluptatum. Itaque necessitatibus beatae molestias praesentium eum quos voluptas quis dicta eius quaerat.
          Similique molestias voluptas corporis quidem veniam dolore, amet deserunt possimus quos id saepe magnam facilis odit in asperiores dolor incidunt itaque dolorem commodi animi accusantium consectetur perferendis ea deleniti? Placeat.
          Voluptatem cupiditate quas quis nam et cum, aut autem minus, ratione omnis nobis similique expedita repellendus obcaecati, quisquam hic assumenda nisi maxime quo veritatis a est consequuntur adipisci unde. Voluptatum.
          Molestias quisquam commodi fugit dignissimos quas quia unde. Accusantium, tenetur ea dolor recusandae ex id molestiae, commodi consequuntur natus eaque, non amet vitae est a eos numquam beatae doloribus vero!
          Rerum itaque nihil sed asperiores facere dolorem cum aut architecto veritatis. Deleniti rerum autem exercitationem consectetur unde ad quaerat. Repellendus inventore ullam magni aspernatur facilis quos ea eligendi nesciunt quis!
          Mollitia, voluptate! Suscipit corporis assumenda quaerat fugiat beatae necessitatibus eos, officiis aut quas molestiae impedit, sequi porro qui dicta praesentium, illo modi a ad cum in eligendi reiciendis. Officiis, id!
          Ab aperiam provident eveniet nisi fugiat doloribus eum sunt culpa nesciunt magni quae exercitationem at dolor dicta accusamus iure sit architecto nulla optio inventore, cumque aliquid dignissimos! Quisquam, non incidunt.
          Inventore, ratione laboriosam eaque facere autem harum aspernatur odit quis unde explicabo, quaerat omnis impedit praesentium totam temporibus voluptate aperiam natus recusandae! Minus ea quo officiis ullam assumenda provident in.
          Aperiam, rem, saepe eveniet quas facere, nisi accusamus autem obcaecati doloremque ratione ab nemo expedita repudiandae necessitatibus mollitia in labore ex qui magni repellendus temporibus porro quasi quam. Dicta, officiis?
          Perspiciatis tenetur laudantium expedita eaque quod nisi laborum harum voluptatem iusto placeat ea amet, exercitationem beatae nobis repudiandae quo nemo quaerat quam excepturi doloremque aperiam. Asperiores, necessitatibus. Reprehenderit, assumenda optio!
          Sint quas rem aliquid consequuntur quo a recusandae harum perferendis cum, accusantium excepturi nisi eius, obcaecati est pariatur voluptates natus et ratione eos sit facere beatae tenetur repellendus libero. Qui!
          Sint sequi quos molestias sapiente harum similique, eos et inventore iusto itaque officia totam vero modi suscipit, odit excepturi iure voluptatibus dolores voluptatum est deserunt, blanditiis accusamus? A, nostrum aperiam!
          Excepturi veritatis mollitia nemo vel, laboriosam ab numquam fugiat quae. Nam, adipisci hic commodi distinctio ad praesentium mollitia ab explicabo tenetur similique quidem, possimus velit aliquam reprehenderit nobis aut maiores?
          Asperiores non consequuntur sit! Pariatur temporibus veniam quaerat officiis mollitia nobis nisi illo rem maiores, similique recusandae quam ipsa aliquid et dignissimos perferendis modi quos at voluptates. Dicta, rem ducimus?
          Commodi quod autem voluptatem corrupti accusantium fugit dolores perferendis quam ut laudantium nulla modi vero dicta doloremque aut quisquam minus, aperiam odit minima, cum, quia odio! Facilis, nihil consequatur! Quibusdam?
          Veniam iure, eveniet asperiores fuga ad natus delectus dolores cum rerum eius, eum tenetur vel aliquam illum. Inventore maiores, vel, consequuntur qui tenetur laborum nesciunt molestias aspernatur suscipit perferendis voluptas.
          Tempore molestiae quas dolor nobis, molestias ipsam ullam. Esse quasi quam architecto debitis possimus quidem doloribus, tenetur et asperiores necessitatibus omnis, cupiditate fugit magnam consectetur voluptate nisi, nesciunt delectus in.
          Rem quis quaerat enim consequatur, sunt quod. Odio neque praesentium inventore. Adipisci corporis placeat itaque quos cupiditate vel culpa nam enim neque eligendi? Aperiam, laudantium doloribus dolores doloremque necessitatibus iusto!
          Natus harum, iusto aut vero perspiciatis nostrum tempora debitis ad voluptate quas excepturi hic ut totam odio culpa dignissimos voluptatibus ratione vitae cum unde, quia molestiae animi, porro modi! Aspernatur?
          Sint, ea! Earum eveniet, aut, sunt quis autem labore dolores laboriosam iusto beatae ea repudiandae tenetur accusantium voluptas tempora amet atque doloribus itaque voluptatibus ipsum excepturi perspiciatis maxime praesentium. Vitae.
          Dolores nobis facere, iusto sed sit necessitatibus suscipit in quisquam unde eligendi distinctio voluptatem exercitationem quibusdam accusantium sequi molestias! Optio non fugit praesentium! Incidunt modi dicta laudantium corporis quae! Suscipit.
          Tempore impedit corrupti, nam praesentium accusamus eaque culpa. Sint quas libero qui quam fuga repellat voluptates officia aliquid quis hic natus maiores eos provident asperiores, quia doloremque, reprehenderit molestias sunt.
          Laudantium porro, dolor, mollitia numquam placeat sunt voluptates autem iusto illum modi dolorem. Aspernatur libero nulla optio similique hic sequi eius voluptatem impedit perferendis quia id iste, excepturi, ea labore!
          Itaque facere dolore ab voluptates dolorem, mollitia a saepe voluptas reprehenderit quas perspiciatis non doloremque velit veritatis voluptatum rem soluta sint in odit dicta quo asperiores, nemo officia. Earum, dolorum.
          Velit tenetur, cum dolorem esse quibusdam dicta hic eaque error! Dolor quo voluptatum a praesentium totam, pariatur possimus ipsa fugiat aut non sed necessitatibus illum, aliquam quod voluptate soluta eligendi.
          Quod illo atque esse reiciendis aliquid excepturi exercitationem eligendi autem. Nulla repellendus accusamus architecto qui harum illo error tempore, excepturi quibusdam minima delectus corporis enim veniam inventore incidunt, quos neque.
          Distinctio praesentium est maiores, illum maxime atque aliquid! Blanditiis temporibus eius ad sint? Porro, sunt dolores debitis impedit voluptate asperiores velit, fuga accusamus exercitationem quisquam aut ea id voluptas maxime.
          Laborum est recusandae a qui, quas perferendis dolores quo, hic alias quos dolore enim accusantium tenetur ea totam natus? Commodi ratione hic quisquam dolorum delectus, est veniam rerum explicabo. Sunt?
          Fugiat id voluptates blanditiis veniam necessitatibus vero natus, aliquam suscipit iusto sit unde quibusdam dolor distinctio quo laborum. Adipisci quam esse est dolor quod rerum, velit nulla eos cum provident?
          Qui accusantium inventore ad labore, aliquam nisi sequi optio quasi ipsa magnam exercitationem nemo minima iste. Expedita dolor pariatur, optio, maxime dolore modi, tempore hic eos cupiditate ratione repellat quae.
          Iste itaque maxime eos eveniet minima temporibus quisquam, repellat suscipit ipsam saepe, magni vitae autem facere enim quam earum voluptate numquam dolore. Sequi impedit porro dolorum deserunt nostrum error at!
          Adipisci tempora accusantium voluptatem corrupti voluptatibus facilis consequuntur, maiores nobis dolor, cupiditate fugit minus, dolores harum repellendus. Esse dolore qui eligendi unde expedita. In officiis suscipit tenetur nam vel sit?
          Minus aperiam impedit iusto reiciendis laboriosam earum quas nostrum et nam ab nisi excepturi vitae consequatur soluta pariatur eius, aliquam sunt? Unde nemo nostrum, quod ex distinctio sit et nihil.
          Numquam, magnam labore. Non molestiae voluptatem, vitae repudiandae nesciunt esse maxime ipsa recusandae ullam ea voluptate minus fuga fugiat ad eaque tempora atque laudantium voluptatum a fugit ratione magnam perferendis.
          Sit ad accusamus vel, aperiam inventore doloribus totam possimus laboriosam. Deleniti veniam reprehenderit quisquam incidunt ipsam, harum commodi saepe mollitia dolorum numquam voluptate, dolor quos natus omnis minima quasi quidem?
          Nihil veritatis soluta, hic ipsam officiis consectetur? Repellendus adipisci natus accusamus tempora dignissimos doloribus non laudantium, ea nemo maxime iste ab, facere mollitia excepturi, inventore nesciunt id reiciendis quidem dolor!
          Assumenda deleniti odio inventore cupiditate accusantium sed voluptatibus nihil, dolor veritatis autem temporibus atque, eum molestias suscipit magni minus quis! Blanditiis unde velit omnis tenetur! Nisi corporis aspernatur consequuntur quam?
          Non cumque cum, a tenetur maxime, sint incidunt id nam enim repellendus provident quia suscipit impedit! Ad, dolor consequuntur! Sunt possimus, quas veritatis maxime nihil voluptatum rem velit eaque est!
          Maxime unde voluptate labore, eius possimus vero error a voluptatibus non molestias repudiandae consequatur nobis earum officia, quod eaque? Maxime cum deserunt iusto reiciendis. Officiis maxime tempora minima ea ducimus.
          Sint magnam sit mollitia rem? Ullam velit quaerat ab earum. Voluptates vero autem dignissimos non repudiandae quam alias, asperiores harum optio provident modi qui aut, repellat animi! Odio, maiores nobis.
          Voluptatum, fugit! Vitae, natus ducimus sapiente praesentium expedita aliquid quas laborum culpa. Debitis dolorum reprehenderit beatae illum quos deleniti magnam quo commodi suscipit repellat ut sit, aspernatur obcaecati voluptatum dolorem.
          Vero consequatur cum animi nihil. Molestias asperiores minima quisquam ad ea unde natus. Quam laudantium vitae cumque ipsa, fuga et hic modi officiis ipsam nisi accusantium veritatis ea ratione error.
          Corporis, consequatur unde. Quod eligendi possimus dolorum, saepe quae ipsa quis molestiae architecto eaque suscipit magnam. At, facere assumenda recusandae sit voluptatum, voluptatem, aspernatur velit unde itaque magni officiis. Recusandae.
        </p>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="h-screen bg-pink-100 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-pink-700 mb-6">Contact</h1>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <p className="text-lg font-semibold">Joel A</p>
          <p className="text-gray-600">joel@gmail.com</p>
          <p className="text-gray-600">+91 9876543210</p>
          <p className="text-gray-600">Chennai, Tamil Nadu</p>
        </div>
      </section>
    </div>
  );
};

export default ScrollSPA;

var headerText2016 = "Kalle Anka-Bingo <smaller> - 2016 års bricka</smaller>";
var headerText2017 = "Kalle Anka-Bingo <smaller> - 2017 års bricka</smaller>";

var footerText = "<a href='https://www.reddit.com/user/Lopsical'>Bingobricka av /u/Lopsical</a> | <a href='https://www.reddit.com/user/entrep'>Skapad och hostad av /u/entrep</a> | <a href='https://github.com/jeffehobbs/HTML5-bingo/' target='_blank'>Based on HTML5-bingo</a><br /><p>Denna bingobricka är baserad på en livstid av research</p>";

var winText = "Grattis! Du vann!";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var JSONBingo2016 = {"squares": [
        {"square": "Det tar mindre än en minut från programmets start innan någon lägger den första kommentaren."},
        {"square": "&#34;Hoho, sån där målarfarg skulle man ha.&#34;"},
        {"square": "&#34;Här kommer din favoritdel, [namn på familjemedlem]!&#34;"},
        {"square": "Någon klagar över hur det var bättre förr när de ser klipp från en nyare disneyfilm."},
        {"square": "Någon klagar på årets julvärd. &#34;Ingen riktig jul utan Weise.&#34;"},
        {"square": "Sista pralinen i Aladdinaskens första lager ligger orörd i mer än 5 minuter."},
        {"square": "Någon drar en parallell mellan Askungens slaveri och sin egna vardag."},
        {"square": "&#34;Ara-papa-papa-papa-papa-papa-pap-i-a!&#34;"},
        {"square": "Någon kommenterar på ungdomar som tittar på sin mobil istället for TV:n."},
        {"square": "Någon kopplar en händelse i programmet till en personlig anektdot som de berättar varje år."},
        {"square": "Någon blir lite väl politisk."},
        {"square": "&#34;Det är Robin Hood jag vill ha!&#34;"},
        {"square": "Någon försöker imitera mössen i Askungen med ljus röst."},
        {"square": "Någon har släppt sig. Ingen kommenterar händelsen."},
        {"square": "&#34;Nåja, vad är väl en bal på slottet...&#34;"},
        {"square": "&#34;Hö hö, det är ju jag som kör.&#34;"},
        {"square": "De yngsta i släkten är de som verkar bry sig minst om programmet."},
        {"square": "Förutom ljuden från TV:n blir rummet helt tyst efter någons aggressiva hostattack."},
        {"square": "Någon blir tvungen att sitta på golvet då alla sittplatser är tagna."},
        {"square": "Någon liknar tjuren Ferdinands ömma moder vid en person i rummet."},
        {"square": "Gratisruta: Kalle Anka visar tecken på svår psykisk ohälsa."},
        {"square": "Någon i sällskapet ser ut att vara valdigt trött pa att titta på Kalle Anka varje julafton."},
        {"square": "Någon har ätit för mycket julgodis och ska tvunget berätta detta for resten av sällskapet."},
        {"square": "Någon imiterar de italienska kockarna i Lady & Lufsens inslag."},
        {"square": "Någon klagar över censur när dockan inte är med."}
    ]
};

var JSONBingo2017 = {"squares": [
        {"square": "Släkten blir osams över om ni ska zappa över till TV3 för att se Weise eller kolla Kalle Anka på ettan."},
        {"square": "&#34;Hoho, sån där målarfarg skulle man ha.&#34;"},
        {"square": "En yngre släkting rusar till köket för att spotta efter att ha fått i sig något äckligt vuxengodis."},
        {"square": "Någon vill ta en bild på släkten för Instagram."},
        {"square": "Någon kommenterar på ungdomar som tittar på sin mobil istället för TVn."},
        {"square": "&#34;Det är Robin Hood jag vill ha!&#34;"},
        {"square": "Någon klagar på felaktig mängd snö/vind/regn utanför fönstret."},
        {"square": "Ett inslag i programmet får någon att berätta en anekdot som alla i rummet redan hört förr."},
        {"square": "Någon drar en parallell mellan Askungens slaveri och sin egna vardag."},
        {"square": "Någon sjunger med."},
        {"square": "<small>Trailern för den nya datoranimerade tjuren Ferdinand visas och släkten blir väldigt upprörd över detta.</small>"},
        {"square": "&#34;Jag menar som en jättebamsing till björn!&#34;"},
        {"square": "Gratisruta: Kalle Anka visar tecken på svår psykisk ohälsa."},
        {"square": "Någon imiterar mössen i Askungen med ljus röst."},
        {"square": "&#34;Här kommer din favoritdel [namn på familjemedlem]!&#34;"},
        {"square": "Någon klagar över censur när dockan inte är med."},
        {"square": "Någon lägger en onödig politisk kommentar."},
        {"square": "&#34;Ara-papa-papa-papa-papa-papa-pap-i-a!&#34;"},
        {"square": "De två julvärdarna säger &#34;Kalle Anka och hans vänner&#34; unisont."},
        {"square": "&#34;Öh, ha den äran&#34;"},
        {"square": "&#34;Hyuck, det är ju jag som kör!&#34;"},
        {"square": "Någon kommenterar att ingen tar den sista pralinen. &#34;Hö hö, typiskt svenskt.&#34;"},
        {"square": "&#34;Nåja, vad är väl en bal på slottet&#34;"},
        {"square": "De vuxna bryr sig mer om vad som händer på TVn än vad barnen gör."},
        {"square": "Någon liknar tjuren Ferdinands ömma moder vid en person i rummet."}
    ]
};



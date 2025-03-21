const projects = [
    {
        name: "This Site",
        readme: "https://api.github.com/repos/EricCaverly/PersonalSite/readme",
        link: "https://github.com/EricCaverly/PersonalSite"
    },
    {
        name: "Virtual Paste",
        readme: "https://api.github.com/repos/EricCaverly/virt_paste/readme",
        link: "https://github.com/EricCaverly/virt_paste"
    }
];

function fetch_readme(uri, callback) {
    fetch(uri, {
        method: "GET",
        headers: {
            "Accept": "application/vnd.github.html+json",
            //"X-GitHub-Api-Version": "2022-11-28"
        }
    }).then((response) => response.text()).then(callback);
}

$(() => {
    

    const hamburg = $("#mobile-hamburger");
    for (let i = 0; i < projects.length; ++i) {
        const li = document.createElement("li");
        const anch = document.createElement("a");
        anch.appendChild(document.createTextNode(projects[i].name));

        anch.addEventListener("click", () => {
            fetch_readme(projects[i].readme, (html) => {
                $("#proj_title").html(projects[i].name);
                $("#proj_readme").html(html);
                $("#proj_link").attr("href", projects[i].link);
                $("#proj_status").html("Dynamically loaded the readme!");
            });
        })

        li.appendChild(anch);
        hamburg.append(li);
    }
})
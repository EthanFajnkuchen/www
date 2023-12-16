
const OurTeam = () => {
    return (
        <section className="container-fluid our-team" typeof="schema:Organization" resource=".">
            <div className="row">
                <h2 className="our-team-title">
                    <a id="team" href="#team">
                        Notre équipe
                    </a>
                </h2>
            </div>
            <div className="row cards-container container-xl">
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                    <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                        <div className="card-body">
                            <div className="card-infos">
                                <a id="#samuel.assoun" href="#"></a>
                                <div className="avatar-name-role">
                                    <div property="schema:member" typeof="schema:Person" resource="#samuel.assoun">
                                        <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                    </div>
                                    <div className="name-role">
                                        <div property="schema:member" typeof="schema:Person" resource="#samuel.assoun">
                                            <div className="person-name" property="schema:name">
                                                <span property="schema:givenName">
                                                    Samuel
                                                </span>
                                                <span property="schema:familyName">
                                                    Assoun
                                                </span>
                                            </div>
                                            <div style={{ "display": "none" }}>
                                                <p property="schema:jobTitle">L'alchimiste</p>
                                            </div>
                                            <div style={{ "display": "none" }}>
                                                <p property="schema:description"></p>
                                            </div>
                                        </div>
                                        <div className="role-name" property="schema:roleName">Co-fondateur & Responsable des opérations</div>
                                    </div>
                                    <div style={{ "display": "none" }}>
                                        <p property="schema:description"></p>
                                    </div>
                                </div>
                                <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6  mb-4">
                    <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                        <div className="card-body">
                            <div className="card-infos">
                                <a id="#nicolas.karageuzian" href="#"></a>
                                <div className="avatar-name-role">
                                    <div property="schema:member" typeof="schema:Person" resource="#nicolas.karageuzian">
                                        <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                    </div>
                                    <div className="name-role">
                                        <div property="schema:member" typeof="schema:Person" resource="#nicolas.karageuzian">
                                            <div className="person-name" property="schema:name">
                                                <span property="schema:givenName">
                                                    Nicolas
                                                </span>
                                                <span property="schema:familyName">
                                                    Karageuzian
                                                </span>
                                            </div>
                                            <div style={{ "display": "none" }}>
                                                <p property="schema:jobTitle">Digital Shaman</p>
                                                <p property="schema:description">IAM & SSO Expert (SAML/OIDC - LDAP & Provider + client implementation)</p>
                                                <p property="schema:description">Artisan du code</p>
                                                <p property="schema:description">Specialiste en Informatique Générale</p>
                                            </div>
                                        </div>
                                        <div className="role-name" property="schema:roleName">Co-fondateur & Architecte Solution</div>
                                    </div>
                                    <div style={{ "display": "none" }}>
                                        <p property="schema:description"></p>
                                    </div>
                                </div>
                                <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6  mb-4">
                    <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                        <div className="card-body">
                            <div className="card-infos">
                                <a id="#sylvain.zyssman" href="#"></a>
                                <div className="avatar-name-role">
                                    <div property="schema:member" typeof="schema:Person" resource="#sylvain.zyssman">
                                        <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                    </div>
                                    <div className="name-role">
                                        <div property="schema:member" typeof="schema:Person" resource="#sylvain.zyssman">
                                            <div className="person-name" property="schema:name">
                                                <span property="schema:givenName">
                                                    Sylvain
                                                </span>
                                                <span property="schema:familyName">
                                                    Zyssman
                                                </span>
                                            </div>
                                            <div style={{ "display": "none" }}>
                                                <p property="schema:jobTitle">IA, machine learning & MLOps expert</p>
                                                <p property="schema:description">Le mentor</p>
                                            </div>
                                        </div>
                                        <div className="role-name" property="schema:roleName">Data Strategy Officer</div>
                                    </div>
                                    <div style={{ "display": "none" }}>
                                        <p property="schema:description"></p>
                                    </div>
                                </div>
                                <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                    <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                        <div className="card-body">
                            <div className='card-infos'>
                                <a id="#remy.teboul" href="#"></a>
                                <div className="avatar-name-role">
                                    <div property="schema:member" typeof="schema:Person" resource="#remy.teboul">
                                        <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                    </div>
                                    <div className="name-role">
                                        <div property="schema:member" typeof="schema:Person" resource="#remy.teboul">
                                            <div className="person-name" property="schema:name">
                                                <span property="schema:givenName">
                                                    Remy
                                                </span>
                                                <span property="schema:familyName">
                                                    Teboul
                                                </span>
                                            </div>
                                            <div style={{ "display": "none" }}>
                                                <p property="schema:jobTitle">L'artiste</p>
                                            </div>
                                        </div>
                                        <div className="role-name" property="schema:roleName">UX / UI Designer</div>
                                    </div>
                                    <div style={{ "display": "none" }}>
                                        <p property="schema:description"></p>
                                    </div>
                                </div>
                                <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                    <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                        <div className="card-body">
                            <div className="card-infos">
                                <a id="#celine.cherqui" href="#"></a>
                                <div className="avatar-name-role">
                                    <div property="schema:member" typeof="schema:Person" resource="#celine.cherqui">
                                        <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                    </div>
                                    <div className="name-role">
                                        <div property="schema:member" typeof="schema:Person" resource="#celine.cherqui">

                                            <div className="person-name" property="schema:name">
                                                <span property="schema:givenName">
                                                    Céline
                                                </span>
                                                <span property="schema:familyName">
                                                    Cherqui
                                                </span>
                                            </div>
                                            <div style={{ "display": "none" }}>
                                                <p property="schema:jobTitle">L'Attrape-talents</p>
                                            </div>
                                        </div>
                                        <div className="role-name" property="schema:roleName">Responsable recrutement / marque employeur</div>
                                    </div>
                                    <div style={{ "display": "none" }}>
                                        <p property="schema:description"></p>
                                    </div>
                                </div>
                                <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6  mb-4">
                    <div className="card team-card h-100" property="schema:member" typeof="schema:Role">
                        <div className="card-body">
                            <div className="card-infos">
                                <a id="#ethan.fajnkuchen" href="#"></a>
                                <div className="avatar-name-role">
                                    <div property="schema:member" typeof="schema:Person" resource="#ethan.fajnkuchen">
                                        <img src="./assets/photos/profil-pic.png" className="avatar" alt="avatar" />
                                    </div>
                                    <div className="name-role">
                                        <div property="schema:member" typeof="schema:Person" resource="#ethan.fajnkuchen">
                                            <div className="person-name" property="schema:name">
                                                <span property="schema:givenName">
                                                    Ethan
                                                </span>
                                                <span property="schema:familyName">
                                                    Fajnkuchen
                                                </span>
                                            </div>
                                            <div style={{ "display": "none" }}>
                                                <p property="schema:jobTitle">Le prince des hackers / Petit scarabée</p>
                                            </div>
                                        </div>
                                        <div className="role-name" property="schema:roleName">Ingénieur Logiciel</div>
                                    </div>
                                    <div style={{ "display": "none" }}>
                                        <p property="schema:description"> </p>
                                    </div>
                                </div>
                                <img src="./assets/pictos/icon-linkedin.svg" alt="icon-linkedin" className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  export default OurTeam;
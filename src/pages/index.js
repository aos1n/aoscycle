import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"

const Index = () => (
  <Layout>
    <Status />
    <View title="Welcome chez IT">
      <p>
       Aos1n gère tout   IT Corail se veut un partenaire de services informatiques pour toutes les entreprises, administrations et associations en région liégeoise. 
      </p>
      
      <p>Création de sites vidéo tres biens car cest le meiw mieuw, gestion de bases de données, noms de domaines, sécurité, nous pouvons rapidement préparer un devis pour vous aider à développer vos projets.
      </p>
      <p>
        Complétez votre 
        {` `}
        <Link to="/app/profile">profil</Link> et accédez à toutes les fonctionnalités de notre site.
      </p>
    </View>
  </Layout>
)

export default Index



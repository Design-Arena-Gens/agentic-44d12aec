'use client'

import { useState } from 'react'
import {
  BookOpen,
  Radio,
  TrendingUp,
  Database,
  FileText,
  Users,
  Settings,
  AlertCircle,
  CheckCircle,
  ClipboardList,
  BarChart3,
  Search,
  ChevronRight,
  ChevronDown,
  PlayCircle,
  Shield,
  Clock,
  Target
} from 'lucide-react'

interface Section {
  id: string
  title: string
  icon: any
  subsections?: {
    id: string
    title: string
    content: string[]
  }[]
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('introduction')
  const [expandedSections, setExpandedSections] = useState<string[]>(['introduction'])

  const sections: Section[] = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: BookOpen,
      subsections: [
        {
          id: 'intro-general',
          title: 'Présentation générale',
          content: [
            'La veille médiatique audiovisuelle est un processus stratégique qui consiste à surveiller, collecter, analyser et diffuser l\'information provenant des médias radio et télévision.',
            'Ce manuel a pour objectif de fournir un guide complet pour mettre en place et gérer efficacement un service de veille médiatique audiovisuelle.',
            'Il s\'adresse aux responsables de communication, aux analystes médias, et à tous les professionnels impliqués dans la surveillance des médias audiovisuels.'
          ]
        },
        {
          id: 'objectifs',
          title: 'Objectifs de la veille',
          content: [
            '• Surveiller la réputation et l\'image de l\'organisation',
            '• Identifier les tendances et sujets émergents',
            '• Anticiper les crises potentielles',
            '• Mesurer l\'impact des campagnes de communication',
            '• Analyser la concurrence et le secteur d\'activité',
            '• Alimenter la stratégie de communication'
          ]
        }
      ]
    },
    {
      id: 'organisation',
      title: 'Organisation du service',
      icon: Users,
      subsections: [
        {
          id: 'structure',
          title: 'Structure de l\'équipe',
          content: [
            'Responsable de veille médiatique : Supervise l\'ensemble du service, définit la stratégie',
            'Analystes médias : Surveillent les sources, collectent et analysent les contenus',
            'Techniciens audiovisuels : Gèrent les outils d\'enregistrement et de capture',
            'Chargés de diffusion : Distribuent les synthèses et alertes aux parties prenantes',
            'Ratio recommandé : 1 analyste pour 20-30 sources actives'
          ]
        },
        {
          id: 'roles',
          title: 'Rôles et responsabilités',
          content: [
            'Responsable de veille : Stratégie, coordination, reporting direction',
            'Analystes : Surveillance 24/7, qualification des contenus, analyse éditoriale',
            'Techniciens : Maintenance des équipements, qualité des enregistrements',
            'Chargés de diffusion : Newsletter, alertes, archives, support utilisateurs'
          ]
        },
        {
          id: 'planning',
          title: 'Planning et horaires',
          content: [
            'Couverture horaire : Définir les plages de surveillance (6h-23h ou 24/7)',
            'Rotation des équipes : Mettre en place des shifts si surveillance continue',
            'Astreintes : Organiser des gardes pour les événements critiques',
            'Réunions régulières : Daily brief (15 min), hebdo stratégique (1h), mensuel bilan'
          ]
        }
      ]
    },
    {
      id: 'sources',
      title: 'Sources et médias',
      icon: Radio,
      subsections: [
        {
          id: 'identification',
          title: 'Identification des sources',
          content: [
            'Chaînes TV nationales : TF1, France 2, France 3, Canal+, M6, Arte, etc.',
            'Chaînes d\'information continue : BFM TV, LCI, CNews, franceinfo',
            'Radios nationales : France Inter, RTL, Europe 1, RMC, Sud Radio',
            'Médias régionaux : France 3 Régions, radios locales',
            'Médias internationaux : CNN, BBC, Al Jazeera, Euronews',
            'Podcasts et médias numériques : Émissions replay, contenus natifs'
          ]
        },
        {
          id: 'priorisation',
          title: 'Priorisation des sources',
          content: [
            'Niveau 1 - Priorité maximale : Sources à audience élevée, impact fort',
            'Niveau 2 - Priorité haute : Médias sectoriels, influents sur la cible',
            'Niveau 3 - Priorité moyenne : Médias régionaux, spécialisés',
            'Niveau 4 - Surveillance ponctuelle : Selon actualité et événements',
            'Critères : Audience, ligne éditoriale, fréquence des mentions, impact réputationnel'
          ]
        },
        {
          id: 'mots-cles',
          title: 'Définition des mots-clés',
          content: [
            'Mots-clés principaux : Nom de l\'organisation, marques, dirigeants',
            'Mots-clés sectoriels : Industrie, concurrents, tendances métier',
            'Mots-clés thématiques : Sujets stratégiques, enjeux de communication',
            'Expressions exactes : "Nom complet", "Slogan officiel"',
            'Opérateurs booléens : (Marque1 OR Marque2) AND (sujet1 OR sujet2)',
            'Exclusions : NOT (termes non pertinents)'
          ]
        }
      ]
    },
    {
      id: 'outils',
      title: 'Outils et technologies',
      icon: Settings,
      subsections: [
        {
          id: 'capture',
          title: 'Outils de capture',
          content: [
            'Enregistreurs TV/Radio professionnels : Systèmes DVR multi-canaux',
            'Logiciels de capture : OBS Studio, FFmpeg, capture cards',
            'Services d\'archivage : INA, Européana, archives nationales',
            'Plateformes de replay : MyTF1, France.tv, 6play, Radioplayer',
            'Agrégateurs : Services spécialisés (Kantar Media, Auxipress, Argus de la presse)'
          ]
        },
        {
          id: 'transcription',
          title: 'Transcription et indexation',
          content: [
            'Reconnaissance vocale automatique (STT) : Google Cloud Speech, AWS Transcribe',
            'Services professionnels : Sonix, Descript, Otter.ai',
            'Indexation temporelle : Timestamping des passages clés',
            'Métadonnées : Émission, date, heure, intervenant, durée',
            'Sous-titrage : Extraction ou génération de sous-titres'
          ]
        },
        {
          id: 'analyse',
          title: 'Outils d\'analyse',
          content: [
            'Analyse sémantique : Détection des sentiments, tonalité éditoriale',
            'Analyse quantitative : Durée d\'antenne, nombre de mentions',
            'Analyse qualitative : Contexte, angle de traitement, intervenants',
            'Tableaux de bord : Power BI, Tableau, Google Data Studio',
            'Alertes automatiques : Configuration de triggers sur mots-clés critiques'
          ]
        },
        {
          id: 'gestion',
          title: 'Gestion documentaire',
          content: [
            'Base de données : Système de GED (Gestion Électronique des Documents)',
            'Stockage : Cloud sécurisé, backup automatique, redondance',
            'Classification : Tags, catégories, niveaux de priorité',
            'Archivage : Politique de rétention, conformité légale',
            'Partage : Droits d\'accès, confidentialité, diffusion contrôlée'
          ]
        }
      ]
    },
    {
      id: 'processus',
      title: 'Processus de veille',
      icon: TrendingUp,
      subsections: [
        {
          id: 'surveillance',
          title: 'Surveillance continue',
          content: [
            '1. Monitoring en temps réel : Surveillance active des flux TV/radio prioritaires',
            '2. Détection automatique : Alertes sur mots-clés via outils de transcription',
            '3. Écoute manuelle : Veille humaine sur programmes stratégiques',
            '4. Capture des contenus : Enregistrement des passages pertinents',
            '5. Qualification initiale : Évaluation rapide de la pertinence et priorité'
          ]
        },
        {
          id: 'collecte',
          title: 'Collecte et traitement',
          content: [
            '1. Extraction : Découpe des extraits audiovisuels pertinents',
            '2. Transcription : Conversion audio en texte avec timestamps',
            '3. Vérification : Contrôle qualité de la transcription',
            '4. Métadonnées : Ajout des informations contextuelles complètes',
            '5. Stockage : Archivage dans la base avec indexation optimale'
          ]
        },
        {
          id: 'analyse-edito',
          title: 'Analyse éditoriale',
          content: [
            'Tonalité : Positive, négative, neutre, mitigée',
            'Angle de traitement : Factuel, critique, promotionnel, polémique',
            'Contexte : Raison de la mention, lien avec l\'actualité',
            'Intervenants : Journaliste, expert, porte-parole, témoin',
            'Impact potentiel : Audience touchée, portée de la diffusion',
            'Recommandations : Actions à envisager suite à cette mention'
          ]
        },
        {
          id: 'diffusion',
          title: 'Diffusion et reporting',
          content: [
            'Alertes immédiates : SMS/email pour mentions critiques (< 15 min)',
            'Bulletin matinal : Synthèse des mentions de la veille (avant 9h)',
            'Revue de presse audiovisuelle : Compilation quotidienne avec extraits',
            'Rapport hebdomadaire : Analyse des tendances, statistiques, insights',
            'Rapport mensuel : Bilan complet, KPI, recommandations stratégiques',
            'Accès à la plateforme : Base consultable par les parties prenantes'
          ]
        }
      ]
    },
    {
      id: 'analyse-metrics',
      title: 'Analyse et indicateurs',
      icon: BarChart3,
      subsections: [
        {
          id: 'kpi',
          title: 'Indicateurs de performance (KPI)',
          content: [
            'Volume : Nombre total de mentions par période',
            'Durée d\'antenne : Temps total de présence médiatique',
            'Audience cumulée : Nombre de téléspectateurs/auditeurs touchés',
            'Équivalent publicitaire : Valeur média estimée des passages',
            'Part de voix : Pourcentage vs concurrents sur le secteur',
            'Taux de visibilité : Mentions dans les émissions principales'
          ]
        },
        {
          id: 'analyse-qualitative',
          title: 'Analyse qualitative',
          content: [
            'Distribution de la tonalité : % positif/négatif/neutre',
            'Thématiques principales : Nuage de mots, sujets récurrents',
            'Messages clés repris : Éléments de langage diffusés',
            'Porte-parole : Performance et présence médiatique',
            'Horaires de diffusion : Prime time vs autres créneaux',
            'Types d\'émissions : JT, débats, reportages, chroniques'
          ]
        },
        {
          id: 'benchmarking',
          title: 'Analyse concurrentielle',
          content: [
            'Comparaison des volumes de mentions avec les concurrents',
            'Analyse de la tonalité comparative',
            'Part de voix sur les sujets stratégiques',
            'Identification des best practices médiatiques',
            'Détection des opportunités de positionnement',
            'Analyse des stratégies de communication concurrentes'
          ]
        },
        {
          id: 'dataviz',
          title: 'Visualisation des données',
          content: [
            'Graphiques temporels : Évolution des mentions dans le temps',
            'Camemberts : Répartition par tonalité, média, thématique',
            'Heatmaps : Moments de forte présence médiatique',
            'Nuages de mots : Termes associés à l\'organisation',
            'Tableaux de bord interactifs : Drill-down par dimension',
            'Exports personnalisés : Rapports adaptés aux destinataires'
          ]
        }
      ]
    },
    {
      id: 'gestion-crise',
      title: 'Gestion de crise',
      icon: AlertCircle,
      subsections: [
        {
          id: 'detection',
          title: 'Détection précoce',
          content: [
            'Surveillance renforcée : Activation du mode veille intensive',
            'Alertes configurées : Triggers sur mots-clés sensibles',
            'Analyse des signaux faibles : Détection de tendances négatives émergentes',
            'Monitoring social : Croisement avec les réseaux sociaux',
            'Veille concurrentielle : Surveillance des crises sectorielles',
            'Remontée immédiate : Procédure d\'escalade vers la direction'
          ]
        },
        {
          id: 'protocole',
          title: 'Protocole de crise',
          content: [
            '1. Alerte immédiate : Notification de la cellule de crise (< 5 min)',
            '2. Évaluation rapide : Gravité, audience, risque de propagation',
            '3. Brief complet : Contexte, historique, extraits disponibles',
            '4. Surveillance continue : Monitoring 24/7 pendant la crise',
            '5. Bulletins réguliers : Updates toutes les heures ou selon besoins',
            '6. Archivage exhaustif : Conservation de tous les contenus liés'
          ]
        },
        {
          id: 'support',
          title: 'Support à la communication',
          content: [
            'Veille en temps réel : Monitoring des réactions médiatiques',
            'Analyse d\'impact : Évaluation de l\'efficacité des messages',
            'Compilation d\'extraits : Mise à disposition rapide des contenus',
            'Benchmark des traitements : Comparaison entre médias',
            'Identification des relais : Journalistes influents sur le sujet',
            'Rapport post-crise : Bilan complet et recommandations'
          ]
        }
      ]
    },
    {
      id: 'juridique',
      title: 'Aspects juridiques',
      icon: Shield,
      subsections: [
        {
          id: 'droits-auteur',
          title: 'Droits d\'auteur et propriété intellectuelle',
          content: [
            'Les contenus audiovisuels sont protégés par le droit d\'auteur',
            'Usage interne : Généralement toléré dans le cadre de la veille stratégique',
            'Usage externe : Nécessite autorisation des ayants-droits',
            'Citation et analyse : Possible dans le cadre du droit à l\'information',
            'Durée de conservation : Respecter les règles d\'archivage légales',
            'Mentions obligatoires : Toujours citer la source (média, date, émission)'
          ]
        },
        {
          id: 'rgpd',
          title: 'Protection des données (RGPD)',
          content: [
            'Données personnelles : Limiter la collecte au strict nécessaire',
            'Consentement : Non requis pour contenus publics déjà diffusés',
            'Droit à l\'oubli : Procédure de suppression sur demande justifiée',
            'Sécurité : Protection des accès, chiffrement des données sensibles',
            'Durée de rétention : Politique claire de conservation/suppression',
            'Registre des traitements : Documentation des processus de veille'
          ]
        },
        {
          id: 'confidentialite',
          title: 'Confidentialité et sécurité',
          content: [
            'Classification des contenus : Public, interne, confidentiel',
            'Contrôle d\'accès : Droits utilisateurs selon le niveau d\'habilitation',
            'Traçabilité : Logs d\'accès et d\'utilisation des contenus',
            'Diffusion sécurisée : Chiffrement des emails, plateformes sécurisées',
            'Gestion des supports : Destruction sécurisée en fin de vie',
            'Clause de confidentialité : Engagement de tous les collaborateurs'
          ]
        }
      ]
    },
    {
      id: 'bonnes-pratiques',
      title: 'Bonnes pratiques',
      icon: CheckCircle,
      subsections: [
        {
          id: 'qualite',
          title: 'Assurance qualité',
          content: [
            'Double vérification : Contrôle systématique des transcriptions sensibles',
            'Cohérence éditoriale : Grilles d\'analyse standardisées',
            'Formation continue : Mise à niveau régulière des analystes',
            'Feedback loop : Retours des utilisateurs intégrés dans les processus',
            'Audits réguliers : Évaluation trimestrielle de la qualité du service',
            'Documentation : Procédures écrites et accessibles à tous'
          ]
        },
        {
          id: 'efficacite',
          title: 'Optimisation de l\'efficacité',
          content: [
            'Automatisation : IA pour pré-qualification et transcription',
            'Priorisation : Focus sur les sources à fort ROI',
            'Templates : Modèles pour les différents types de rapports',
            'Outils collaboratifs : Partage d\'informations entre analystes',
            'Veille mutualisée : Coordination avec d\'autres services',
            'Amélioration continue : Révision trimestrielle des processus'
          ]
        },
        {
          id: 'formation',
          title: 'Formation de l\'équipe',
          content: [
            'Onboarding : Programme d\'intégration de 2 semaines minimum',
            'Connaissance des médias : Formation sur le paysage audiovisuel',
            'Maîtrise des outils : Certification sur les logiciels utilisés',
            'Analyse éditoriale : Techniques d\'évaluation de la tonalité',
            'Gestion de crise : Simulation et procédures d\'urgence',
            'Veille technologique : Suivi des innovations du secteur'
          ]
        },
        {
          id: 'innovation',
          title: 'Innovation et évolution',
          content: [
            'Intelligence artificielle : Intégration progressive de l\'IA générative',
            'Analyse prédictive : Anticipation des tendances médiatiques',
            'Convergence numérique : Extension aux podcasts et médias sociaux',
            'Temps réel : Amélioration de la réactivité avec streaming analysis',
            'Personnalisation : Rapports adaptés automatiquement par destinataire',
            'Visualisation avancée : Dashboards immersifs et interactifs'
          ]
        }
      ]
    },
    {
      id: 'budget',
      title: 'Budget et ressources',
      icon: Target,
      subsections: [
        {
          id: 'couts',
          title: 'Estimation des coûts',
          content: [
            'Ressources humaines : 60-70% du budget (salaires équipe)',
            'Outils et licences : 15-20% (logiciels, plateformes, bases)',
            'Équipements : 5-10% (serveurs, enregistreurs, stockage)',
            'Prestations externes : 5-10% (transcription, analyse ponctuelle)',
            'Formation : 2-5% (montée en compétences)',
            'Benchmark : Budget annuel entre 150K€ et 500K€ selon la taille'
          ]
        },
        {
          id: 'roi',
          title: 'Retour sur investissement',
          content: [
            'Valeur média générée : Mesure de l\'équivalent publicitaire',
            'Prévention de crise : Coût évité grâce à la détection précoce',
            'Optimisation de la com : Amélioration du ROI des campagnes',
            'Gain de temps : Productivité des équipes communication',
            'Avantage concurrentiel : Intelligence stratégique acquise',
            'ROI moyen observé : Entre 200% et 400% sur 3 ans'
          ]
        },
        {
          id: 'scalabilite',
          title: 'Scalabilité du service',
          content: [
            'Phase 1 - Démarrage : 2-3 analystes, sources nationales prioritaires',
            'Phase 2 - Croissance : 5-8 analystes, extension aux médias régionaux',
            'Phase 3 - Maturité : 10+ analystes, couverture internationale',
            'Automatisation progressive : Réduction des tâches répétitives',
            'Externalisation possible : Complément avec prestataires spécialisés',
            'Modèle hybride : Équipe core + ressources flexibles'
          ]
        }
      ]
    }
  ]

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const activeContent = sections.find(s => s.id === activeSection)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl">
              <Radio className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Manuel de Veille Médiatique Audiovisuelle
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Guide complet pour la gestion d'un service professionnel
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <ClipboardList className="w-5 h-5" />
                Table des matières
              </h2>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon
                  const isActive = activeSection === section.id
                  const isExpanded = expandedSections.includes(section.id)

                  return (
                    <div key={section.id}>
                      <button
                        onClick={() => {
                          setActiveSection(section.id)
                          toggleSection(section.id)
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium flex-1">{section.title}</span>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        )}
                      </button>

                      {isExpanded && section.subsections && (
                        <div className="ml-8 mt-1 space-y-1">
                          {section.subsections.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => {
                                setActiveSection(section.id)
                                document.getElementById(sub.id)?.scrollIntoView({ behavior: 'smooth' })
                              }}
                              className="w-full text-left px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              {sub.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              {activeContent && (
                <div>
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    {(() => {
                      const Icon = activeContent.icon
                      return <Icon className="w-10 h-10 text-blue-600" />
                    })()}
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {activeContent.title}
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {activeContent.subsections?.map((subsection) => (
                      <div
                        key={subsection.id}
                        id={subsection.id}
                        className="scroll-mt-8"
                      >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          {subsection.title}
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-3">
                          {subsection.content.map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="text-gray-700 dark:text-gray-300 leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => {
                        const currentIndex = sections.findIndex(s => s.id === activeSection)
                        if (currentIndex > 0) {
                          setActiveSection(sections[currentIndex - 1].id)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      }}
                      disabled={sections.findIndex(s => s.id === activeSection) === 0}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      Précédent
                    </button>
                    <button
                      onClick={() => {
                        const currentIndex = sections.findIndex(s => s.id === activeSection)
                        if (currentIndex < sections.length - 1) {
                          setActiveSection(sections[currentIndex + 1].id)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      }}
                      disabled={sections.findIndex(s => s.id === activeSection) === sections.length - 1}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Suivant
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">9</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Chapitres</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">30+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sections</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">~2h</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Temps lecture</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-16 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="text-sm">
              © 2024 Manuel de Veille Médiatique Audiovisuelle - Guide professionnel complet
            </p>
            <p className="text-xs mt-2">
              Document à usage interne - Reproduction et diffusion soumises à autorisation
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

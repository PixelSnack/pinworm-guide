import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.jsx'
import { 
  ChevronDown, 
  ChevronRight, 
  Heart, 
  Users, 
  Baby, 
  GraduationCap, 
  Briefcase, 
  Activity,
  Leaf,
  AlertTriangle,
  Clock,
  CheckCircle,
  Info,
  Shield,
  Home
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const [openSections, setOpenSections] = useState({})
  const [showAdultContent, setShowAdultContent] = useState(false)

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const AdultContentWarning = ({ children }) => {
    if (!showAdultContent) {
      return (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800">
              <AlertTriangle className="h-5 w-5" />
              Adults Only Content
            </CardTitle>
            <CardDescription className="text-orange-700">
              This section contains intimate relationship guidance for adults.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setShowAdultContent(true)}
              variant="outline"
              className="border-orange-300 text-orange-800 hover:bg-orange-100"
            >
              I am 18+ and want to view this content
            </Button>
          </CardContent>
        </Card>
      )
    }
    return children
  }

  const SectionCard = ({ title, icon: Icon, children, isAdultContent = false }) => {
    const content = (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-blue-600" />
            {title}
            {isAdultContent && <Badge variant="secondary">Adults Only</Badge>}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    )

    if (isAdultContent) {
      return <AdultContentWarning>{content}</AdultContentWarning>
    }
    return content
  }

  const CollapsibleSection = ({ title, children, id }) => (
    <Collapsible open={openSections[id]} onOpenChange={() => toggleSection(id)}>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between p-4 h-auto">
          <span className="font-medium text-left">{title}</span>
          {openSections[id] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Complete Pinworm Management Guide
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A practical, evidence-based guide for families, couples, and individuals worldwide. 
              Living normally during treatment.
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'overview', label: 'Overview', icon: Info },
              { id: 'management', label: 'Management', icon: Shield },
              { id: 'family', label: 'Family Life', icon: Users },
              { id: 'intimacy', label: 'Intimacy', icon: Heart },
              { id: 'activities', label: 'Activities', icon: Activity },
              { id: 'natural', label: 'Natural Approaches', icon: Leaf },
              { id: 'guidelines', label: 'Guidelines', icon: CheckCircle }
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={activeSection === id ? "default" : "ghost"}
                onClick={() => setActiveSection(id)}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'overview' && (
          <div className="space-y-6">
            <Alert className="border-blue-200 bg-blue-50">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-blue-800">
                Pinworms affect millions of people worldwide annually. This is a common, highly treatable condition 
                that occurs across all socioeconomic levels and geographic regions.
              </AlertDescription>
            </Alert>

            <SectionCard title="Understanding Pinworms" icon={Info}>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Pinworms are tiny white parasitic worms (about the size of a staple) that live in your intestines. 
                  Female worms crawl out at night to lay microscopic, sticky eggs around the anal area. These eggs 
                  become infectious within 6 hours and can survive on surfaces for 2-3 weeks.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">The Transmission Cycle:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                    <li>You accidentally swallow eggs (through hand-to-mouth contact)</li>
                    <li>Eggs hatch in your small intestine</li>
                    <li>Worms mature in your large intestine over 2-6 weeks</li>
                    <li>Females lay new eggs around your anus</li>
                    <li>Cycle repeats</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">What Kills Pinworm Eggs:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Hot water (60°C/140°F or higher)</li>
                      <li>• Regular soap and water</li>
                      <li>• Household disinfectants with alcohol or bleach</li>
                      <li>• High heat from dryers (40+ minutes)</li>
                      <li>• Direct sunlight (UV exposure)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">What Doesn't Kill Eggs:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Hand sanitizer alone</li>
                      <li>• Cold or lukewarm water</li>
                      <li>• Air fresheners</li>
                      <li>• Surface sprays without disinfectant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {activeSection === 'management' && (
          <div className="space-y-6">
            <SectionCard title="5-Phase Management Approach" icon={Shield}>
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1: Immediate Response (First 12 Hours)",
                    goal: "Assume eggs are already in your environment and act accordingly",
                    actions: [
                      "Everyone in household follows same hygiene measures",
                      "Don't share towels, washcloths, or bedding",
                      "Begin daily surface cleaning with soap and hot water",
                      "Contact pharmacy/healthcare provider for medication"
                    ]
                  },
                  {
                    phase: "Phase 2: Environmental Control (Within 12 Hours)",
                    goal: "Kill any eggs already in your space",
                    actions: [
                      "Wash all underwear, towels, washcloths, pajamas daily at 60°C (140°F)",
                      "Dry on high heat for 40+ minutes",
                      "Clean toilet seats, handles, switches, doorknobs daily",
                      "Vacuum carpets and mop floors regularly",
                      "Individual towels for each person"
                    ]
                  },
                  {
                    phase: "Phase 3: Personal Protocol (Ongoing)",
                    goal: "Stop re-infecting yourself",
                    actions: [
                      "Morning showers daily - removes eggs laid overnight",
                      "Change underwear twice daily (morning and bedtime)",
                      "Sleep in snug-fitting underwear",
                      "Keep hands away from mouth",
                      "Wipe front-to-back",
                      "Wash hands with soap for 20 seconds frequently"
                    ]
                  },
                  {
                    phase: "Phase 4: Dietary Support",
                    goal: "Support overall digestive health",
                    actions: [
                      "For IBS/Crohn's: Focus on easily digestible foods",
                      "Include lean proteins and cooked vegetables",
                      "Consider probiotic foods if tolerated",
                      "Limit excess sugar and refined carbohydrates",
                      "Stay well-hydrated"
                    ]
                  },
                  {
                    phase: "Phase 5: Medical Treatment",
                    goal: "Eliminate worms with proven medication",
                    actions: [
                      "Request mebendazole, albendazole, or pyrantel pamoate",
                      "Entire household takes medication simultaneously",
                      "Standard: single dose + repeat exactly 14 days later",
                      "Complete both doses even if symptoms improve"
                    ]
                  }
                ].map((phase, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <CardDescription className="font-medium text-blue-700">
                        Goal: {phase.goal}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </SectionCard>
          </div>
        )}

        {activeSection === 'family' && (
          <div className="space-y-6">
            <SectionCard title="Managing Young Children" icon={Baby}>
              <div className="space-y-4">
                <CollapsibleSection title="Daily Routines for Little Ones" id="children-routines">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold mb-2">Morning Routine:</h5>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Shower or thorough wash (not bath) to remove overnight eggs</li>
                        <li>• Change underwear and pajamas immediately</li>
                        <li>• Trim and scrub fingernails weekly</li>
                        <li>• Supervise hand washing before eating</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Childcare and Preschool:</h5>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Continue normal attendance - pinworms are extremely common</li>
                        <li>• Inform caregivers if required by facility policy</li>
                        <li>• Pack individual snacks and drinks</li>
                        <li>• Emphasize hand washing before eating</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Special Considerations" id="children-special">
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Potty training:</strong> Continue normal training with extra hand washing emphasis</li>
                    <li>• <strong>Thumb sucking:</strong> Extra vigilance about hand and pacifier cleanliness</li>
                    <li>• <strong>Toy sharing:</strong> Clean frequently handled toys daily</li>
                    <li>• <strong>Bath time:</strong> Individual baths only, clean tub between children</li>
                  </ul>
                </CollapsibleSection>
              </div>
            </SectionCard>

            <SectionCard title="Teenagers: Unique Considerations" icon={GraduationCap}>
              <div className="space-y-4">
                <CollapsibleSection title="Privacy and Independence" id="teen-privacy">
                  <ul className="text-sm space-y-2">
                    <li>• Respect autonomy while ensuring treatment compliance</li>
                    <li>• Explain the science - teenagers respond well to understanding biology</li>
                    <li>• Address embarrassment - emphasize how common this is globally</li>
                    <li>• Involve in solution - let them take ownership of hygiene routine</li>
                  </ul>
                </CollapsibleSection>

                <CollapsibleSection title="Social Life Management" id="teen-social">
                  <ul className="text-sm space-y-2">
                    <li>• Dating and relationships: Same intimacy guidelines as adults apply</li>
                    <li>• Sleepovers and parties: Can continue with enhanced hygiene awareness</li>
                    <li>• Sports teams: Normal participation with individual towels and water bottles</li>
                    <li>• Part-time jobs: Especially important for food service - extra hand washing</li>
                  </ul>
                </CollapsibleSection>
              </div>
            </SectionCard>

            <SectionCard title="Mixed-Age Households" icon={Users}>
              <CollapsibleSection title="Complex Family Dynamics" id="mixed-families">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-2">Managing Different Age Groups:</h5>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Stagger bathroom times for proper supervision</li>
                      <li>• Assign older children to help supervise younger siblings</li>
                      <li>• Different bedtimes may require multiple bedding changes</li>
                      <li>• Age-appropriate explanations for each child</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Blended Families and Custody:</h5>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Coordinate with co-parents - both households need protocols</li>
                      <li>• Ensure children receive both medication doses regardless of home</li>
                      <li>• Share treatment progress between homes</li>
                      <li>• Maintain consistent rules across households</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>
            </SectionCard>
          </div>
        )}

        {activeSection === 'intimacy' && (
          <div className="space-y-6">
            <SectionCard title="Adult Intimacy Guidelines" icon={Heart} isAdultContent={true}>
              <div className="space-y-4">
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription className="text-green-800">
                    Physical intimacy can continue during treatment with awareness of transmission routes.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">Safe Activities:</h4>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li>• Kissing (all types) - when avoiding anal area</li>
                      <li>• Oral sex to genitals only - with no anal contact</li>
                      <li>• Vaginal intercourse - ensuring no anal-to-vaginal contact</li>
                      <li>• Manual stimulation - with thoroughly washed hands</li>
                      <li>• Body contact and massage - avoiding anal area</li>
                      <li>• Shared bathing - without mouth-to-anal contact</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-3">High-Risk Activities to Avoid:</h4>
                    <ul className="text-sm text-red-700 space-y-2">
                      <li>• Oral-anal contact - direct transmission route</li>
                      <li>• Any anal contact followed by oral/vaginal contact</li>
                      <li>• Touching anal area then mouth/genitals without washing</li>
                      <li>• Sharing unwashed items that contacted anal area</li>
                    </ul>
                  </div>
                </div>

                <CollapsibleSection title="Practical Guidelines for Couples" id="couple-guidelines">
                  <ul className="text-sm space-y-2">
                    <li>• Wash hands thoroughly before and after intimate contact</li>
                    <li>• Shower before intimacy when possible, especially in morning</li>
                    <li>• Change bed linens regularly during treatment period</li>
                    <li>• Avoid anal-to-oral transmission routes in position changes</li>
                    <li>• Clean any items that contact anal area before other body contact</li>
                    <li>• Consider timing intimacy after morning showers when egg load is lowest</li>
                    <li>• Communicate openly about comfort levels and precautions</li>
                  </ul>
                </CollapsibleSection>
              </div>
            </SectionCard>
          </div>
        )}

        {activeSection === 'activities' && (
          <div className="space-y-6">
            <SectionCard title="Work and Social Life" icon={Briefcase}>
              <div className="space-y-4">
                <CollapsibleSection title="Workplace Guidelines" id="workplace">
                  <ul className="text-sm space-y-2">
                    <li>• Continue working normally - pinworms don't spread through casual contact</li>
                    <li>• Practice enhanced hand hygiene before eating and after restrooms</li>
                    <li>• Clean workspace - wipe keyboards and phones</li>
                    <li>• Avoid preparing shared food during active infection</li>
                    <li>• Food service workers: Extra important hand hygiene protocols</li>
                  </ul>
                </CollapsibleSection>

                <CollapsibleSection title="Social Situations" id="social">
                  <ul className="text-sm space-y-2">
                    <li>• Attend gatherings with normal hygiene precautions</li>
                    <li>• Avoid preparing food for others if actively symptomatic</li>
                    <li>• Practice good hand hygiene before eating</li>
                    <li>• Don't share drinks or eating utensils during first week</li>
                  </ul>
                </CollapsibleSection>
              </div>
            </SectionCard>

            <SectionCard title="Sports and Physical Activities" icon={Activity}>
              <div className="space-y-4">
                <CollapsibleSection title="Swimming and Water Activities" id="swimming">
                  <ul className="text-sm space-y-2">
                    <li>• Continue participation - chlorinated water kills eggs quickly</li>
                    <li>• Shower immediately after swimming</li>
                    <li>• Use individual towels - don't share pool towels</li>
                    <li>• Wash swimwear in hot water after each use</li>
                  </ul>
                </CollapsibleSection>

                <CollapsibleSection title="Team Sports and Fitness" id="sports">
                  <ul className="text-sm space-y-2">
                    <li>• Normal participation - sweat and casual contact don't transmit</li>
                    <li>• Individual water bottles and towels</li>
                    <li>• Hand hygiene before eating team snacks</li>
                    <li>• Post-activity showers when available</li>
                    <li>• Equipment sharing is fine, just wash hands before eating</li>
                  </ul>
                </CollapsibleSection>
              </div>
            </SectionCard>
          </div>
        )}

        {activeSection === 'natural' && (
          <div className="space-y-6">
            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-yellow-800">
                While some natural compounds show theoretical promise, scientific evidence for effectiveness 
                against pinworms specifically is limited. Best used as complementary support alongside proven medical treatment.
              </AlertDescription>
            </Alert>

            <SectionCard title="Evidence-Based Natural Compounds" icon={Leaf}>
              <div className="space-y-4">
                <CollapsibleSection title="Garlic (Allium sativum)" id="garlic">
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Active compound:</strong> Allicin - demonstrated antiparasitic properties in lab studies</p>
                    <p className="text-sm"><strong>Mechanism:</strong> Reacts with sulfur-containing enzymes in parasites</p>
                    <p className="text-sm"><strong>Usage:</strong> Fresh garlic (2-3 cloves daily) minced into food, or aged garlic extract</p>
                    <p className="text-sm text-gray-600"><strong>Research note:</strong> Effective against some protozoan parasites, limited pinworm research</p>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Pumpkin Seeds (Cucurbita pepo)" id="pumpkin">
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Active compounds:</strong> Cucurbitacin and cucurbitin - may affect parasite motility</p>
                    <p className="text-sm"><strong>Traditional use:</strong> Historically used in many cultures for intestinal parasites</p>
                    <p className="text-sm"><strong>Usage:</strong> 1-2 handfuls (30-60g) raw or lightly roasted daily on empty stomach</p>
                    <p className="text-sm text-gray-600"><strong>Research note:</strong> Some studies show 69-75% reduction in certain parasites</p>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Coconut Oil" id="coconut">
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Active compounds:</strong> Medium-chain fatty acids (caprylic, lauric acid)</p>
                    <p className="text-sm"><strong>Mechanism:</strong> May disrupt parasite cell membranes and metabolism</p>
                    <p className="text-sm"><strong>Usage:</strong> 1-2 tablespoons daily, added to food or taken directly</p>
                    <p className="text-sm text-gray-600"><strong>Research note:</strong> Shows promise against some parasites in laboratory studies</p>
                  </div>
                </CollapsibleSection>
              </div>
            </SectionCard>

            <SectionCard title="Supportive Approaches" icon={Shield}>
              <div className="space-y-4">
                <CollapsibleSection title="Digestive Support" id="digestive">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold mb-2">Probiotics:</h5>
                      <p className="text-sm text-gray-700">Support healthy gut flora that may compete with parasites. Sources: high-quality supplements, fermented foods (kefir, yogurt, sauerkraut).</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Digestive Enzymes:</h5>
                      <p className="text-sm text-gray-700">May help break down parasite protective coatings. Types: papain (papaya), bromelain (pineapple). Take between meals.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Fiber Support:</h5>
                      <p className="text-sm text-gray-700">May help physically remove parasites from intestinal tract. Sources: psyllium husk, ground flaxseed, chia seeds.</p>
                    </div>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Immune System Support" id="immune">
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Vitamin C:</strong> 1000-2000mg daily for immune function and tissue healing</li>
                    <li>• <strong>Zinc:</strong> 15-30mg daily with food for immune function and wound healing</li>
                    <li>• <strong>Vitamin D:</strong> Maintain adequate blood levels for immune regulation</li>
                  </ul>
                </CollapsibleSection>
              </div>
            </SectionCard>

            <Alert className="border-blue-200 bg-blue-50">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-blue-800">
                <strong>Important:</strong> Use natural methods to support, not replace, proven medical treatment. 
                Discuss all supplements with healthcare providers and maintain hygiene measures regardless of approach.
              </AlertDescription>
            </Alert>
          </div>
        )}

        {activeSection === 'guidelines' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    DO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• Maintain normal life activities with enhanced hygiene</li>
                    <li>• Treat entire household simultaneously</li>
                    <li>• Take both medication doses as prescribed</li>
                    <li>• Shower daily (especially mornings)</li>
                    <li>• Change underwear twice daily during infection</li>
                    <li>• Wash hands frequently with soap for 20 seconds</li>
                    <li>• Keep fingernails short and clean</li>
                    <li>• Use hot water (60°C/140°F) for washing</li>
                    <li>• Clean high-touch surfaces daily</li>
                    <li>• Communicate openly with family</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    DON'T
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Panic or unnecessarily isolate</li>
                    <li>• Skip the second medication dose</li>
                    <li>• Share towels, washcloths, or underwear</li>
                    <li>• Shake bedding before washing</li>
                    <li>• Rely on hand sanitizer alone</li>
                    <li>• Bite nails or touch mouth after contamination</li>
                    <li>• Prepare food for others during active infection</li>
                    <li>• Feel ashamed - this affects millions worldwide</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <SectionCard title="When to Seek Medical Attention" icon={AlertTriangle}>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Contact Healthcare Provider If:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Symptoms persist after completing both medication doses</li>
                    <li>• Signs of secondary bacterial infection (redness, swelling, pus)</li>
                    <li>• Severe abdominal pain or persistent digestive symptoms</li>
                    <li>• Multiple reinfections despite proper treatment</li>
                    <li>• Allergic reactions to medication</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Emergency Situations (Rare):</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Severe allergic reaction to medication</li>
                    <li>• Signs of appendicitis (severe abdominal pain, fever, vomiting)</li>
                    <li>• High fever with severe abdominal symptoms</li>
                  </ul>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Timeline and Expectations" icon={Clock}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { week: "Week 1", action: "Begin hygiene measures, start medication, environmental cleaning" },
                    { week: "Week 2", action: "Continue protocol, prepare for second dose" },
                    { week: "Week 3", action: "Take second dose, maintain prevention" },
                    { week: "Week 4", action: "Monitor for reinfection, gradually relax measures" }
                  ].map((item, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">{item.week}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-gray-600">{item.action}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Success Indicators:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• No visible worms around anal area at night</li>
                    <li>• Reduced or eliminated itching</li>
                    <li>• Improved sleep quality</li>
                    <li>• No new symptoms in household members</li>
                  </ul>
                </div>
              </div>
            </SectionCard>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              This guide provides evidence-based information for managing pinworms. 
              Always consult healthcare providers for personalized medical advice.
            </p>
            <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
              <Home className="h-4 w-4" />
              <span>A comprehensive resource for families worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


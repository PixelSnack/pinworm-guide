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
  Home,
  Pill,
  Target,
  Zap,
  User,
  Calendar,
  Utensils,
  Dumbbell,
  Plane,
  Building
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
          <CardContent className="p-6 text-center">
            <Heart className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Adult Intimacy Guidelines</h3>
            <Badge variant="secondary" className="mb-3">Adults Only</Badge>
            <p className="text-orange-700 mb-4">
              This section contains guidance for adult relationships during treatment.
            </p>
            <Button 
              onClick={() => setShowAdultContent(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200"
            >
              I am 18+ and want to view this content
            </Button>
          </CardContent>
        </Card>
      )
    }
    return children
  }

  // Reusable components for consistent styling with enhanced visual hierarchy
  const SectionCard = ({ children, className = "" }) => (
    <Card className={`mb-6 transition-shadow duration-200 hover:shadow-md ${className}`}>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  )

  const CollapsibleSection = ({ title, children, icon: Icon, isOpen, onToggle }) => (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 rounded-lg transition-all duration-200 hover:shadow-sm">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-5 w-5 text-gray-600" />}
          <span className="font-medium">{title}</span>
        </div>
        {isOpen ? <ChevronDown className="h-4 w-4 transition-transform duration-200" /> : <ChevronRight className="h-4 w-4 transition-transform duration-200" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Complete Pinworm Management Guide
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A practical, evidence-based guide for families, couples, and individuals worldwide.
              Living normally during treatment.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          {/* Enhanced Navigation with better hover states */}
          <TabsList className="grid w-full grid-cols-7 mb-8 bg-white border border-gray-200 rounded-lg p-1">
            <TabsTrigger 
              value="overview" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 hover:bg-gray-100"
            >
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger 
              value="management" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 hover:bg-gray-100"
            >
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Management</span>
            </TabsTrigger>
            <TabsTrigger 
              value="family" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 hover:bg-gray-100"
            >
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Family Life</span>
            </TabsTrigger>
            <TabsTrigger 
              value="intimacy" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 hover:bg-gray-100"
            >
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Intimacy</span>
            </TabsTrigger>
            <TabsTrigger 
              value="activities" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 hover:bg-gray-100"
            >
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Activities</span>
            </TabsTrigger>
            <TabsTrigger 
              value="natural" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 hover:bg-gray-100"
            >
              <Leaf className="h-4 w-4" />
              <span className="hidden sm:inline">Natural Approaches</span>
            </TabsTrigger>
            <TabsTrigger 
              value="guidelines" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 hover:bg-gray-100"
            >
              <CheckCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Guidelines</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Section */}
          <TabsContent value="overview">
            <div className="space-y-6">
              <Alert className="border-blue-200 bg-blue-50 border-l-4 border-l-blue-500">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Pinworms affect millions of people worldwide annually. This is a common, highly treatable condition
                  that occurs across all socioeconomic levels and geographic regions.
                </AlertDescription>
              </Alert>

              <SectionCard className="border-l-4 border-l-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">Understanding Pinworms</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Pinworms are tiny white parasitic worms (about the size of a staple) that live in your intestines. 
                    Female worms crawl out at night to lay microscopic, sticky eggs around the anal area. These eggs 
                    become infectious within 6 hours and can survive on surfaces for 2-3 weeks.
                  </p>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">The Transmission Cycle:</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>You accidentally swallow eggs (through hand-to-mouth contact)</li>
                      <li>Eggs hatch in your small intestine</li>
                      <li>Worms mature in your large intestine over 2-6 weeks</li>
                      <li>Females lay new eggs around your anus</li>
                      <li>Cycle repeats</li>
                    </ol>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 border-l-4 border-l-green-500">
                      <h4 className="font-semibold text-green-800 mb-3">What Kills Pinworm Eggs:</h4>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Hot water (60°C/140°F or higher)</li>
                        <li>• Regular soap and water</li>
                        <li>• Household disinfectants with alcohol or bleach</li>
                        <li>• High heat from dryers (40+ minutes)</li>
                        <li>• Direct sunlight (UV exposure)</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 border-l-4 border-l-red-500">
                      <h4 className="font-semibold text-red-800 mb-3">What Doesn't Kill Eggs:</h4>
                      <ul className="space-y-1 text-red-700 text-sm">
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
          </TabsContent>

          {/* Management Section - Enhanced with better visual hierarchy */}
          <TabsContent value="management">
            <div className="space-y-6">
              <SectionCard className="border-l-4 border-l-blue-500">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-blue-800">5-Phase Management Approach</h2>
                </div>
              </SectionCard>

              {/* Phase Cards with enhanced styling */}
              <div className="space-y-4">
                {/* Phase 1 */}
                <SectionCard className="border-l-4 border-l-blue-500 bg-blue-50">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-blue-800">Phase 1: Immediate Response (First 12 Hours)</h3>
                    <p className="text-blue-600 text-sm mt-1">Goal: Assume eggs are already in your environment and act accordingly</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Everyone in household follows same hygiene measures
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Don't share towels, washcloths, or bedding
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Begin daily surface cleaning with soap and hot water
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Contact pharmacy/healthcare provider for medication
                    </li>
                  </ul>
                </SectionCard>

                {/* Phase 2 */}
                <SectionCard className="border-l-4 border-l-blue-500 bg-blue-50">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-blue-800">Phase 2: Environmental Control (Within 12 Hours)</h3>
                    <p className="text-blue-600 text-sm mt-1">Goal: Kill any eggs already in your space</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Wash all underwear, towels, washcloths, pajamas daily at 60°C (140°F)
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Dry on high heat for 40+ minutes
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Clean toilet seats, handles, switches, doorknobs daily
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Vacuum carpets and mop floors regularly
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Individual towels for each person
                    </li>
                  </ul>
                </SectionCard>

                {/* Phase 3 */}
                <SectionCard className="border-l-4 border-l-blue-500 bg-blue-50">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-blue-800">Phase 3: Personal Protocol (Ongoing)</h3>
                    <p className="text-blue-600 text-sm mt-1">Goal: Stop re-infecting yourself</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Morning showers daily - mechanically removes eggs laid overnight
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Change underwear twice daily - morning and bedtime
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Sleep in snug-fitting underwear to reduce egg spread
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Keep hands away from mouth, especially after bathroom use
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Wash hands with soap for 20 seconds frequently
                    </li>
                  </ul>
                </SectionCard>

                {/* Phase 4 */}
                <SectionCard className="border-l-4 border-l-blue-500 bg-blue-50">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-blue-800">Phase 4: Dietary Support</h3>
                    <p className="text-blue-600 text-sm mt-1">Goal: Support overall digestive health during treatment</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Focus on easily digestible foods: cooked vegetables, rice, oats
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Include lean proteins: fish, chicken
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Consider probiotic foods if tolerated: yogurt, kefir
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      Stay well-hydrated and maintain regular bowel movements
                    </li>
                  </ul>
                </SectionCard>

                {/* Phase 5 - Medical Treatment with enhanced medication section */}
                <SectionCard className="border-l-4 border-l-blue-500 bg-blue-50">
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <Pill className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-blue-800">Phase 5: Medical Treatment</h3>
                    </div>
                    <p className="text-blue-600 text-sm mt-1">Goal: Eliminate worms with proven medication</p>
                  </div>
                  
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        Request mebendazole, albendazole, or pyrantel pamoate for entire household
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        Standard treatment: single dose plus repeat dose exactly 14 days later
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        Everyone takes medication simultaneously to prevent reinfection
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        Complete both doses even if symptoms improve after first dose
                      </li>
                    </ul>

                    <CollapsibleSection
                      title="📋 Detailed Medication Comparison"
                      isOpen={openSections.medicationComparison}
                      onToggle={() => toggleSection('medicationComparison')}
                    >
                      <div className="space-y-6">
                        <Alert className="border-orange-200 bg-orange-50">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            All three medications are highly effective against pinworms. Choice often depends on 
                            availability, age, and regional preferences.
                          </AlertDescription>
                        </Alert>

                        <div className="grid md:grid-cols-3 gap-4">
                          {/* Mebendazole */}
                          <div className="bg-white border-2 border-blue-200 rounded-lg p-4 border-l-4 border-l-blue-500">
                            <div className="mb-3">
                              <h4 className="font-semibold text-blue-800">Mebendazole</h4>
                              <Badge className="bg-blue-100 text-blue-800 text-xs">First-line treatment</Badge>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium">How it works:</span>
                                <p className="text-gray-600">Prevents worms from absorbing glucose, causing energy depletion</p>
                              </div>
                              <div>
                                <span className="font-medium">Duration in body:</span>
                                <p className="text-gray-600">Active for 2-6 hours, minimal systemic absorption</p>
                              </div>
                              <div>
                                <span className="font-medium">Dosage:</span>
                                <p className="text-gray-600">Single 100mg dose, repeat after 14 days</p>
                              </div>
                              <div>
                                <span className="font-medium">Availability:</span>
                                <p className="text-gray-600">Prescription required in most countries</p>
                              </div>
                              <div>
                                <span className="font-medium">Food requirements:</span>
                                <p className="text-gray-600">Can be taken with or without food</p>
                              </div>
                            </div>
                          </div>

                          {/* Albendazole */}
                          <div className="bg-white border-2 border-green-200 rounded-lg p-4 border-l-4 border-l-green-500">
                            <div className="mb-3">
                              <h4 className="font-semibold text-green-800">Albendazole</h4>
                              <Badge className="bg-green-100 text-green-800 text-xs">Alternative option</Badge>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium">How it works:</span>
                                <p className="text-gray-600">Disrupts worm cell structure and energy production</p>
                              </div>
                              <div>
                                <span className="font-medium">Duration in body:</span>
                                <p className="text-gray-600">Active for 8-12 hours, better tissue penetration</p>
                              </div>
                              <div>
                                <span className="font-medium">Dosage:</span>
                                <p className="text-gray-600">Single 400mg dose, repeat after 14 days</p>
                              </div>
                              <div>
                                <span className="font-medium">Availability:</span>
                                <p className="text-gray-600">Prescription required, widely available globally</p>
                              </div>
                              <div>
                                <span className="font-medium">Food requirements:</span>
                                <p className="text-gray-600">Take with fatty food for better absorption</p>
                              </div>
                            </div>
                          </div>

                          {/* Pyrantel Pamoate */}
                          <div className="bg-white border-2 border-orange-200 rounded-lg p-4 border-l-4 border-l-orange-500">
                            <div className="mb-3">
                              <h4 className="font-semibold text-orange-800">Pyrantel Pamoate</h4>
                              <Badge className="bg-orange-100 text-orange-800 text-xs">Over-the-counter</Badge>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium">How it works:</span>
                                <p className="text-gray-600">Paralyzes worms by blocking nerve transmission</p>
                              </div>
                              <div>
                                <span className="font-medium">Duration in body:</span>
                                <p className="text-gray-600">Active for 24-48 hours, minimal absorption</p>
                              </div>
                              <div>
                                <span className="font-medium">Dosage:</span>
                                <p className="text-gray-600">11mg/kg body weight, repeat after 14 days</p>
                              </div>
                              <div>
                                <span className="font-medium">Availability:</span>
                                <p className="text-gray-600">Over-the-counter in USA, Canada, Australia</p>
                              </div>
                              <div>
                                <span className="font-medium">Food requirements:</span>
                                <p className="text-gray-600">Take with food to reduce stomach upset</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* International Treatment Protocols */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">🌍 International Treatment Protocols</h4>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="border-l-4 border-l-blue-500 pl-4">
                              <h5 className="font-semibold text-gray-800 mb-3">Standard Protocol (Most Countries)</h5>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li>• <strong>Day 0:</strong> First dose</li>
                                <li>• <strong>Day 14:</strong> Second dose</li>
                                <li>• Continue hygiene for 1 more week</li>
                              </ul>
                            </div>
                            
                            <div className="border-l-4 border-l-purple-500 pl-4">
                              <h5 className="font-semibold text-gray-800 mb-3">Regional Variations</h5>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li>• <strong>UK/Australia:</strong> Single dose often sufficient</li>
                                <li>• <strong>USA:</strong> Pyrantel pamoate commonly used (OTC)</li>
                                <li>• <strong>WHO Guidelines:</strong> Albendazole for mass treatment</li>
                                <li>• <strong>Canada:</strong> Mebendazole preferred, 2-dose standard</li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg border-l-4 border-l-blue-500">
                            <h5 className="font-semibold text-blue-800 mb-2">Extended Protocol (Some Countries)</h5>
                            <p className="text-sm text-blue-700 mb-3">
                              In some countries such as Denmark, a third dose may be administered 2 weeks after the second dose (Day 28) to address potential reinfection cycles.
                            </p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div className="bg-white p-3 rounded border">
                                <div className="font-semibold text-blue-800">Day 0</div>
                                <div className="text-sm text-gray-600">First dose</div>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <div className="font-semibold text-blue-800">Day 14</div>
                                <div className="text-sm text-gray-600">Second dose</div>
                              </div>
                              <div className="bg-white p-3 rounded border">
                                <div className="font-semibold text-blue-800">Day 28</div>
                                <div className="text-sm text-gray-600">Third dose</div>
                              </div>
                            </div>
                            <p className="text-xs text-blue-600 mt-3">
                              <strong>Rationale:</strong> The third dose addresses potential reinfection cycles and ensures complete elimination.
                            </p>
                          </div>

                          <Alert className="border-yellow-200 bg-yellow-50 mt-4">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertDescription>
                              <strong>Important:</strong> Always follow your healthcare provider's specific instructions. 
                              Regional differences exist in treatment approaches.
                            </AlertDescription>
                          </Alert>
                        </div>
                      </div>
                    </CollapsibleSection>
                  </div>
                </SectionCard>
              </div>
            </div>
          </TabsContent>

          {/* Family Life Section */}
          <TabsContent value="family">
            <div className="space-y-6">
              {/* Managing Young Children */}
              <SectionCard className="border-l-4 border-l-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <Baby className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-blue-800">Managing Young Children</h2>
                </div>

                <CollapsibleSection
                  title="Daily Routines for Little Ones"
                  icon={Clock}
                  isOpen={openSections.childRoutines}
                  onToggle={() => toggleSection('childRoutines')}
                >
                  <div className="space-y-4">
                    <div className="border-l-4 border-l-green-500 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Morning Routine:</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Shower or thorough wash (not bath) to remove overnight eggs</li>
                        <li>• Change underwear and pajamas immediately</li>
                        <li>• Trim and scrub fingernails weekly</li>
                        <li>• Supervise hand washing before eating</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-l-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Childcare and Preschool:</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Continue normal attendance - pinworms are extremely common in childcare settings</li>
                        <li>• Inform caregivers if required by facility policy</li>
                        <li>• Pack individual snacks and drinks</li>
                        <li>• Emphasize hand washing before eating</li>
                        <li>• Send extra underwear if needed</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Special Considerations:</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• <strong>Potty training:</strong> Continue normal training with extra emphasis on hand washing</li>
                        <li>• <strong>Thumb sucking/pacifiers:</strong> Extra vigilance about hand and pacifier cleanliness</li>
                        <li>• <strong>Toy sharing:</strong> Clean frequently handled toys daily with disinfectant wipes</li>
                        <li>• <strong>Bath time:</strong> Individual baths or showers only, clean tub between children</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleSection>
              </SectionCard>

              {/* Teenagers */}
              <SectionCard className="border-l-4 border-l-purple-500">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                  <h2 className="text-xl font-bold text-purple-800">Teenagers: Unique Considerations</h2>
                </div>

                <CollapsibleSection
                  title="Privacy and Independence"
                  isOpen={openSections.teenPrivacy}
                  onToggle={() => toggleSection('teenPrivacy')}
                >
                  <div className="space-y-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Respect autonomy</strong> while ensuring treatment compliance</li>
                      <li>• <strong>Explain the science</strong> - teenagers respond well to understanding the biology</li>
                      <li>• <strong>Address embarrassment</strong> - emphasize how common this is (millions affected globally)</li>
                      <li>• <strong>Involve in solution</strong> - let them take ownership of their hygiene routine</li>
                    </ul>
                  </div>
                </CollapsibleSection>

                <CollapsibleSection
                  title="Social Life Management"
                  isOpen={openSections.teenSocial}
                  onToggle={() => toggleSection('teenSocial')}
                >
                  <div className="space-y-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Dating and relationships:</strong> Same intimacy guidelines as adults apply</li>
                      <li>• <strong>Sleepovers and parties:</strong> Can continue with enhanced hygiene awareness</li>
                      <li>• <strong>Sports teams:</strong> Normal participation with individual towels and water bottles</li>
                      <li>• <strong>School activities:</strong> Continue all activities, emphasize hand hygiene</li>
                      <li>• <strong>Part-time jobs:</strong> Especially important for food service - extra hand washing</li>
                    </ul>
                  </div>
                </CollapsibleSection>
              </SectionCard>
            </div>
          </TabsContent>

          {/* Intimacy Section */}
          <TabsContent value="intimacy">
            <AdultContentWarning>
              <div className="space-y-6">
                <SectionCard className="border-l-4 border-l-pink-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-6 w-6 text-pink-600" />
                    <h2 className="text-xl font-bold text-pink-800">Adult Intimacy Guidelines</h2>
                    <Badge className="bg-pink-100 text-pink-800">Adults Only</Badge>
                  </div>

                  <Alert className="border-green-200 bg-green-50 mb-4 border-l-4 border-l-green-500">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Physical intimacy can continue during treatment with awareness of transmission routes.
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 border-l-4 border-l-green-500">
                      <h4 className="font-semibold text-green-800 mb-3">Safe Activities</h4>
                      <ul className="space-y-1 text-sm text-green-700">
                        <li>• Kissing (all types) - when avoiding the anal area</li>
                        <li>• Oral sex to genitals only - with no anal contact</li>
                        <li>• Vaginal intercourse - ensuring no anal-to-vaginal contact</li>
                        <li>• Manual stimulation - with thoroughly washed hands and trimmed nails</li>
                        <li>• Body contact and massage - avoiding the anal area</li>
                        <li>• Shared bathing - without mouth-to-anal contact</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 border-l-4 border-l-red-500">
                      <h4 className="font-semibold text-red-800 mb-3">High-Risk Activities to Avoid</h4>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• Oral-anal contact - direct transmission route</li>
                        <li>• Any anal contact followed by oral or vaginal contact - without thorough hand washing</li>
                        <li>• Touching anal area then mouth or genitals - without washing hands</li>
                        <li>• Sharing unwashed items that have contacted the anal area</li>
                      </ul>
                    </div>
                  </div>

                  <CollapsibleSection
                    title="Practical Guidelines for Couples"
                    isOpen={openSections.coupleGuidelines}
                    onToggle={() => toggleSection('coupleGuidelines')}
                  >
                    <div className="space-y-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• <strong>Wash hands thoroughly</strong> before and after intimate contact</li>
                        <li>• <strong>Shower before intimacy</strong> when possible, especially in the morning</li>
                        <li>• <strong>Change bed linens regularly</strong> during treatment period</li>
                        <li>• <strong>Avoid anal-to-oral transmission routes</strong> in any position changes</li>
                        <li>• <strong>Clean any items</strong> that contact the anal area before they contact other body parts</li>
                        <li>• <strong>Consider timing intimacy</strong> after morning showers when egg load is lowest</li>
                        <li>• <strong>Communicate openly</strong> about comfort levels and precautions</li>
                      </ul>
                    </div>
                  </CollapsibleSection>
                </SectionCard>
              </div>
            </AdultContentWarning>
          </TabsContent>

          {/* Activities Section */}
          <TabsContent value="activities">
            <div className="space-y-6">
              <SectionCard className="border-l-4 border-l-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-blue-800">Work and Social Life</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-l-green-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">Workplace Guidelines</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Continue working normally - pinworms don't spread through casual workplace contact</li>
                      <li>• Practice enhanced hand hygiene - wash hands before eating and after using restrooms</li>
                      <li>• Clean your workspace - wipe down frequently touched surfaces like keyboards and phones</li>
                      <li>• Avoid preparing shared food during active infection</li>
                      <li>• Food service workers: Especially important to follow hand hygiene protocols</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-blue-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">Social Situations</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Attend gatherings with normal hygiene precautions</li>
                      <li>• Avoid preparing food for others if you're actively symptomatic</li>
                      <li>• Practice good hand hygiene before eating</li>
                      <li>• Don't share drinks or eating utensils during the first week of treatment</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-purple-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">Travel Considerations</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Pack extra underwear and sleepwear</li>
                      <li>• Bring personal towels when possible</li>
                      <li>• Hotel stays: Request fresh linens, wash hands frequently</li>
                      <li>• International travel: Ensure access to medication for second dose</li>
                    </ul>
                  </div>
                </div>
              </SectionCard>

              <SectionCard className="border-l-4 border-l-orange-500">
                <div className="flex items-center gap-3 mb-4">
                  <Dumbbell className="h-6 w-6 text-orange-600" />
                  <h2 className="text-xl font-bold text-orange-800">Sports and Physical Activities</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-l-blue-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">Swimming and Water Activities</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Continue participation - chlorinated water kills pinworm eggs quickly</li>
                      <li>• Shower immediately after swimming</li>
                      <li>• Use individual towels - don't share pool towels</li>
                      <li>• Wash swimwear in hot water after each use</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-green-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">Team Sports and Fitness</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Normal participation - sweat and casual contact don't transmit pinworms</li>
                      <li>• Individual water bottles and towels</li>
                      <li>• Hand hygiene before eating team snacks</li>
                      <li>• Post-activity showers when available</li>
                      <li>• Equipment sharing: Normal sharing is fine, just wash hands before eating</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-l-purple-500 pl-4">
                    <h3 className="font-semibold text-lg mb-3">Gym and Fitness Centers</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Continue workouts with standard hygiene practices</li>
                      <li>• Wipe equipment before and after use (standard gym etiquette)</li>
                      <li>• Shower after workouts when possible</li>
                      <li>• Personal towels for face and hands</li>
                    </ul>
                  </div>
                </div>
              </SectionCard>
            </div>
          </TabsContent>

          {/* Natural Approaches Section - ENHANCED WITH SCIENTIFIC DEPTH */}
<TabsContent value="natural">
  <div className="space-y-6">
    <SectionCard className="border-l-4 border-l-green-500">
      <div className="flex items-center gap-3 mb-4">
        <Leaf className="h-6 w-6 text-green-600" />
        <h2 className="text-xl font-bold text-green-800">Natural and Complementary Approaches</h2>
      </div>

      <Alert className="border-yellow-200 bg-yellow-50 mb-6 border-l-4 border-l-yellow-500">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Important:</strong> Natural approaches should complement, not replace, proven medical treatment. 
          Always consult healthcare providers before making significant dietary or supplement changes.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Utensils className="h-4 w-4" />
            Dietary Approaches
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 border-l-4 border-l-green-500">
              <h4 className="font-semibold text-green-800 mb-2">Potentially Helpful Foods:</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-green-700">• Pumpkin seeds: 1-2 handfuls daily</p>
                  <p className="text-gray-600 ml-2">Contains cucurbitacin compounds that may affect parasite motility. Studies show 69-75% reduction in some parasites, though pinworm-specific research is limited.</p>
                </div>
                <div>
                  <p className="font-medium text-green-700">• Garlic: Fresh garlic in cooking</p>
                  <p className="text-gray-600 ml-2">Allicin compounds disrupt parasite cell membranes. Most effective when crushed fresh. Proven against protozoa like Giardia and Entamoeba.</p>
                </div>
                <div>
                  <p className="font-medium text-green-700">• Probiotic foods: Yogurt, kefir, fermented vegetables</p>
                  <p className="text-gray-600 ml-2">Strengthen gut barrier and immune response. Beneficial bacteria produce antimicrobial compounds and compete with parasites for resources.</p>
                </div>
                <div>
                  <p className="font-medium text-green-700">• High-fiber foods: Support regular bowel movements</p>
                  <p className="text-gray-600 ml-2">Support beneficial bacteria growth, enhance mucus production, and improve intestinal transit to help eliminate parasites naturally.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 border-l-4 border-l-red-500">
              <h4 className="font-semibold text-red-800 mb-2">Foods to Limit:</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-red-700">• Excess sugar and refined carbohydrates</p>
                  <p className="text-gray-600 ml-2">Disrupt gut microbiome balance and may suppress immune function, potentially hindering recovery.</p>
                </div>
                <div>
                  <p className="font-medium text-red-700">• Processed foods during treatment</p>
                  <p className="text-gray-600 ml-2">Often lack essential nutrients and contain additives that may disrupt beneficial gut bacteria.</p>
                </div>
                <div>
                  <p className="font-medium text-red-700">• Foods that trigger digestive symptoms</p>
                  <p className="text-gray-600 ml-2">Individual sensitivities may worsen discomfort during treatment. Focus on easily digestible, nutrient-dense foods.</p>
                </div>
                <div>
                  <p className="font-medium text-red-700">• Undercooked meat and fish</p>
                  <p className="text-gray-600 ml-2">Risk of additional parasitic infections while immune system is managing current condition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Herbal Considerations</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 border-l-4 border-l-amber-500 mb-4">
            <div className="flex items-start gap-2 mb-3">
              <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
              <div>
                <p className="font-medium text-amber-800 mb-1">Note:</p>
                <p className="text-sm text-amber-700">
                  Scientific evidence for herbal treatments is limited. These should only be used as complementary support alongside proven medical treatment.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-amber-800 mb-2">Traditional Herbs:</h4>
                <ul className="space-y-1 text-sm text-amber-700">
                  <li>• <strong>Wormwood:</strong> Traditional use, requires professional guidance</li>
                  <li>• <strong>Black walnut:</strong> Traditional antiparasitic, limited modern evidence</li>
                  <li>• <strong>Cloves:</strong> Traditional use, may support digestive health</li>
                  <li>• <strong>Oregano oil:</strong> General antimicrobial properties</li>
                </ul>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-pink-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-pink-800 mb-1">Important Notes</h4>
                    <ul className="text-xs text-pink-700 space-y-1">
                      <li>• Consult healthcare provider before use</li>
                      <li>• May interact with medications</li>
                      <li>• Not recommended as sole treatment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Lifestyle and Wellness Support</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 border-l-4 border-l-blue-500">
              <h4 className="font-medium text-blue-800 mb-2">Stress Management</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Regular sleep schedule</li>
                <li>• Stress reduction techniques</li>
                <li>• Moderate exercise</li>
                <li>• Mindfulness practices</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 border-l-4 border-l-green-500">
              <h4 className="font-medium text-green-800 mb-2">Digestive Health</h4>
              <ul className="space-y-1 text-sm text-green-700">
                <li>• Stay well-hydrated</li>
                <li>• Regular meal timing</li>
                <li>• Gentle movement after meals</li>
                <li>• Avoid digestive irritants</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 border-l-4 border-l-purple-500">
              <h4 className="font-medium text-purple-800 mb-2">Immune Support</h4>
              <ul className="space-y-1 text-sm text-purple-700">
                <li>• Adequate sleep (7-9 hours)</li>
                <li>• Regular physical activity</li>
                <li>• Balanced nutrition</li>
                <li>• Limit alcohol and smoking</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Complementary Therapies</h3>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 border-l-4 border-l-teal-500">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Probiotics:</strong> May support gut health during and after treatment</li>
              <li>• <strong>Digestive enzymes:</strong> For those with digestive sensitivities</li>
              <li>• <strong>Immune support:</strong> Vitamin C, zinc (within recommended daily amounts)</li>
              <li>• <strong>Anti-inflammatory foods:</strong> Support overall digestive health</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 border-l-4 border-l-blue-500">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-800 mb-1">Scientific Note:</h4>
              <p className="text-sm text-blue-700">
                While traditional use supports these approaches, peer-reviewed research specifically on pinworms is limited. 
                These foods may provide general immune and digestive support during treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  </div>
</TabsContent>

          {/* Guidelines Section */}
          <TabsContent value="guidelines">
            <div className="space-y-6">
              {/* DO/DON'T Section with enhanced styling */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 border-l-4 border-l-green-500">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">✅ DO</h3>
                  </div>
                  <ul className="space-y-2 text-green-700">
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
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 border-l-4 border-l-red-500">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800">⚠️ DON'T</h3>
                  </div>
                  <ul className="space-y-2 text-red-700">
                    <li>• Panic or unnecessarily isolate</li>
                    <li>• Skip the second medication dose</li>
                    <li>• Share towels, washcloths, or underwear</li>
                    <li>• Shake bedding before washing</li>
                    <li>• Rely on hand sanitizer alone</li>
                    <li>• Bite nails or touch mouth after contamination</li>
                    <li>• Prepare food for others during active infection</li>
                    <li>• Feel ashamed - this affects millions worldwide</li>
                  </ul>
                </div>
              </div>

              {/* When to Seek Medical Attention */}
              <Alert className="border-yellow-200 bg-yellow-50 border-l-4 border-l-yellow-500">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <h3 className="font-semibold text-lg mb-2">⚠️ When to Seek Medical Attention</h3>
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Contact Healthcare Provider If:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Symptoms persist after completing both medication doses</li>
                      <li>• Signs of secondary bacterial infection (redness, swelling, pus)</li>
                      <li>• Severe abdominal pain or persistent digestive symptoms</li>
                      <li>• Multiple reinfections despite proper treatment</li>
                      <li>• Allergic reactions to medication</li>
                    </ul>
                  </div>
                </AlertDescription>
              </Alert>

              <Alert className="border-red-200 bg-red-50 border-l-4 border-l-red-500">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <h3 className="font-semibold text-lg mb-2 text-red-800">🚨 Emergency Situations (Rare):</h3>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Severe allergic reaction to medication</li>
                    <li>• Signs of appendicitis (severe abdominal pain, fever, vomiting)</li>
                    <li>• High fever with severe abdominal symptoms</li>
                  </ul>
                </AlertDescription>
              </Alert>

              {/* Timeline and Expectations */}
              <SectionCard className="border-l-4 border-l-blue-500">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-blue-800">Timeline and Expectations</h2>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center border-l-4 border-l-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2">Week 1</h3>
                    <p className="text-sm text-blue-700">
                      Begin hygiene measures, start medication, environmental cleaning
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center border-l-4 border-l-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2">Week 2</h3>
                    <p className="text-sm text-blue-700">
                      Continue protocol, prepare for second dose
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center border-l-4 border-l-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2">Week 3</h3>
                    <p className="text-sm text-blue-700">
                      Take second dose, maintain prevention
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center border-l-4 border-l-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2">Week 4</h3>
                    <p className="text-sm text-blue-700">
                      Monitor for reinfection, gradually relax measures
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 border-l-4 border-l-green-500">
                  <h3 className="font-semibold text-green-800 mb-4">Success Indicators:</h3>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• No visible worms around anal area at night</li>
                    <li>• Reduced or eliminated itching</li>
                    <li>• Improved sleep quality</li>
                    <li>• No new symptoms in household members</li>
                  </ul>
                </div>
              </SectionCard>

              {/* Final Recommendations */}
              <SectionCard className="border-l-4 border-l-gray-500">
                <h3 className="font-semibold text-lg mb-4">Final Recommendations</h3>
                <p className="text-sm text-gray-600 mb-4">
                  This guide provides evidence-based information for managing pinworms. Always consult healthcare 
                  providers for personalized medical advice.
                </p>
                <div className="text-center">
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    🌍 A comprehensive resource for families worldwide
                  </Badge>
                </div>
              </SectionCard>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              This guide provides general information and should not replace professional medical advice.
              Always consult healthcare providers for diagnosis and treatment decisions.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Last updated: 2025 | For educational purposes only
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


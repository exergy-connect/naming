// Physics Theories and Models Data
const physicsData = {
  "name": "Physics as known today",
  "year": 2026,
  "children": [
    {
      "name": "Classical Mechanics",
      "year": 1687,
      "children": [
        {
          "name": "Newtonian Mechanics",
          "year": 1687,
          "children": [
            {"name": "Newton's Laws of Motion", "year": 1687, "summary": "Three fundamental laws describing the relationship between motion and forces.", "people": ["Isaac Newton"], "tags": ["force"]},
            {"name": "Universal Gravitation", "year": 1687, "summary": "Every particle attracts every other particle with a force proportional to their masses.", "people": ["Isaac Newton"], "tags": ["force"]},
            {"name": "Conservation of Momentum", "year": 1644, "summary": "Total momentum of a closed system remains constant in the absence of external forces.", "people": ["René Descartes"]},
            {"name": "Conservation of Energy", "year": 1847, "summary": "Energy cannot be created or destroyed, only transformed from one form to another.", "people": ["Julius Robert von Mayer", "James Prescott Joule"]}
          ]
        },
        {
          "name": "Analytical Mechanics",
          "year": 1788,
          "children": [
            {"name": "Lagrangian Formulation", "year": 1788, "summary": "Mechanics reformulated using kinetic and potential energy in a single function.", "people": ["Joseph-Louis Lagrange"]},
            {"name": "Hamiltonian Formulation", "year": 1834, "summary": "Mechanics expressed in terms of position and momentum coordinates.", "people": ["William Rowan Hamilton"]},
            {"name": "Action Principle", "year": 1744, "summary": "Physical systems follow paths that minimize or maximize the action integral.", "people": ["Pierre Louis Maupertuis"]},
            {"name": "Canonical Transformations", "year": 1834, "summary": "Coordinate transformations that preserve the form of Hamilton's equations.", "people": ["William Rowan Hamilton"]}
          ]
        },
        {
          "name": "Continuum Mechanics",
          "year": 1822,
          "children": [
            {"name": "Fluid Dynamics", "year": 1755, "summary": "Study of fluids in motion and the forces acting on them.", "people": ["Leonhard Euler", "Daniel Bernoulli"]},
            {"name": "Elasticity Theory", "year": 1822, "summary": "Behavior of materials that return to original shape after deformation.", "people": ["Claude-Louis Navier", "Augustin-Louis Cauchy"]},
            {"name": "Wave Propagation", "year": 1747, "summary": "How waves travel through different media and interact with boundaries.", "people": ["Jean le Rond d'Alembert"]},
            {"name": "Navier-Stokes Equations", "year": 1822, "summary": "Fundamental equations describing the motion of viscous fluid substances.", "people": ["Claude-Louis Navier", "George Gabriel Stokes"]}
          ]
        }
      ]
    },
    {
      "name": "Quantum Physics",
      "year": 1900,
      "children": [
        {
          "name": "Quantum Mechanics",
          "year": 1925,
          "children": [
            {"name": "Schrödinger Equation", "year": 1926, "summary": "Fundamental equation describing how quantum states evolve over time.", "people": ["Erwin Schrödinger"]},
            {"name": "Heisenberg Uncertainty Principle", "year": 1927, "summary": "Fundamental limit to precision of simultaneous measurement of complementary properties.", "people": ["Werner Heisenberg"]},
            {"name": "Wave-Particle Duality", "year": 1924, "summary": "Concept that all matter exhibits both wave and particle properties.", "people": ["Louis de Broglie"]},
            {"name": "Quantum Entanglement", "year": 1935, "summary": "Phenomenon where particles become correlated and share quantum states.", "people": ["Albert Einstein", "Boris Podolsky", "Nathan Rosen"]}
          ]
        },
        {
          "name": "Quantum Field Theory",
          "year": 1927,
          "children": [
            {"name": "Standard Model", "year": 1975, "summary": "Theory describing three of the four fundamental forces and all known elementary particles.", "people": ["Sheldon Glashow", "Abdus Salam", "Steven Weinberg"], "tags": ["force"]},
            {"name": "Quantum Electrodynamics", "year": 1948, "summary": "Quantum field theory of electromagnetism describing interactions of light and matter.", "people": ["Richard Feynman", "Julian Schwinger", "Sin-Itiro Tomonaga"], "tags": ["force"]},
            {"name": "Quantum Chromodynamics", "year": 1973, "summary": "Theory of the strong nuclear force that binds quarks and gluons.", "people": ["Murray Gell-Mann", "Harald Fritzsch", "Heinrich Leutwyler"], "tags": ["force"]},
            {"name": "Electroweak Theory", "year": 1967, "summary": "Unified description of electromagnetic and weak nuclear forces.", "people": ["Sheldon Glashow", "Abdus Salam", "Steven Weinberg"], "tags": ["force"]}
          ]
        },
        {
          "name": "Quantum Information",
          "year": 1980,
          "children": [
            {"name": "Quantum Computing", "year": 1982, "summary": "Computing paradigm that uses quantum mechanical phenomena like superposition and entanglement to perform computations.", "people": ["Richard Feynman", "Paul Benioff", "Yuri Manin"]},
            {"name": "Quantum Cryptography", "year": 1984, "summary": "Cryptographic protocols that use quantum mechanical properties to secure communication.", "people": ["Charles Bennett", "Gilles Brassard"]},
            {"name": "Bell's Theorem", "year": 1964, "summary": "Theorem proving that no local hidden variable theory can reproduce all predictions of quantum mechanics.", "people": ["John Stewart Bell"]},
            {"name": "Quantum Teleportation", "year": 1993, "summary": "Process of transferring quantum information from one location to another using entanglement.", "people": ["Charles Bennett", "Gilles Brassard", "Claude Crépeau", "Richard Jozsa", "Asher Peres", "William Wootters"]}
          ]
        }
      ]
    },
    {
      "name": "Relativity",
      "year": 1905,
      "children": [
        {
          "name": "Special Relativity",
          "year": 1905,
          "children": [
            {"name": "Lorentz Transformations", "year": 1904, "summary": "Mathematical transformations that relate space and time coordinates between different inertial reference frames.", "people": ["Hendrik Lorentz"]},
            {"name": "Time Dilation", "year": 1905, "summary": "Phenomenon where time passes slower for objects moving relative to an observer.", "people": ["Albert Einstein"]},
            {"name": "Length Contraction", "year": 1905, "summary": "Phenomenon where the length of an object appears shorter when moving relative to an observer.", "people": ["Albert Einstein"]},
            {"name": "Mass-Energy Equivalence", "year": 1905, "summary": "Principle that mass and energy are equivalent and can be converted into each other, expressed as E=mc².", "people": ["Albert Einstein"]}
          ]
        },
        {
          "name": "General Relativity",
          "year": 1915,
          "children": [
            {"name": "Einstein Field Equations", "year": 1915, "summary": "Set of equations describing how matter and energy curve spacetime.", "people": ["Albert Einstein"], "tags": ["force"]},
            {"name": "Black Holes", "year": 1916, "summary": "Regions of spacetime where gravity is so strong that nothing can escape.", "people": ["Karl Schwarzschild", "Albert Einstein"]},
            {"name": "Gravitational Waves", "year": 1916, "summary": "Ripples in spacetime caused by accelerating massive objects.", "people": ["Albert Einstein"]},
            {"name": "Cosmological Models", "year": 1917, "summary": "Theoretical frameworks describing the large-scale structure and evolution of the universe.", "people": ["Albert Einstein", "Willem de Sitter", "Alexander Friedmann"]}
          ]
        },
        {
          "name": "Relativistic Mechanics",
          "year": 1905,
          "children": [
            {"name": "Relativistic Kinematics", "year": 1905, "summary": "Study of motion in the absence of forces, accounting for relativistic effects.", "people": ["Albert Einstein"]},
            {"name": "Relativistic Dynamics", "year": 1905, "summary": "Study of motion under the influence of forces, incorporating relativistic corrections.", "people": ["Albert Einstein"]},
            {"name": "Minkowski Spacetime", "year": 1908, "summary": "Four-dimensional mathematical model combining three-dimensional space with time into a single continuum.", "people": ["Hermann Minkowski"]},
            {"name": "Twin Paradox", "year": 1911, "summary": "Thought experiment demonstrating time dilation where a traveling twin ages slower than a stationary twin.", "people": ["Albert Einstein", "Paul Langevin"]}
          ]
        }
      ]
    },
    {
      "name": "Thermodynamics",
      "year": 1850,
      "children": [
        {
          "name": "Classical Thermodynamics",
          "year": 1850,
          "children": [
            {"name": "Laws of Thermodynamics", "year": 1850, "summary": "Four fundamental laws governing energy, entropy, and temperature in thermodynamic systems.", "people": ["Rudolf Clausius", "William Thomson"]},
            {"name": "Entropy", "year": 1865, "summary": "Measure of disorder or randomness in a system, central to the second law of thermodynamics.", "people": ["Rudolf Clausius"]},
            {"name": "Heat Engines", "year": 1824, "summary": "Devices that convert thermal energy into mechanical work through cyclic processes.", "people": ["Sadi Carnot"]},
            {"name": "Carnot Cycle", "year": 1824, "summary": "Theoretical reversible thermodynamic cycle that defines the maximum possible efficiency for a heat engine.", "people": ["Sadi Carnot"]}
          ]
        },
        {
          "name": "Statistical Mechanics",
          "year": 1871,
          "children": [
            {"name": "Boltzmann Distribution", "year": 1871, "summary": "Probability distribution describing the statistical behavior of particles in thermal equilibrium.", "people": ["Ludwig Boltzmann"]},
            {"name": "Fermi-Dirac Statistics", "year": 1926, "summary": "Statistical distribution describing particles with half-integer spin that obey the Pauli exclusion principle.", "people": ["Enrico Fermi", "Paul Dirac"]},
            {"name": "Bose-Einstein Statistics", "year": 1924, "summary": "Statistical distribution describing particles with integer spin that can occupy the same quantum state.", "people": ["Satyendra Nath Bose", "Albert Einstein"]},
            {"name": "Partition Function", "year": 1902, "summary": "Mathematical function that encodes the statistical properties of a thermodynamic system in equilibrium.", "people": ["Josiah Willard Gibbs"]}
          ]
        },
        {
          "name": "Non-Equilibrium Thermodynamics",
          "year": 1931,
          "children": [
            {"name": "Onsager reciprocal relations", "year": 1931, "summary": "Symmetry relations between transport coefficients in systems near thermodynamic equilibrium.", "people": ["Lars Onsager"]},
            {"name": "Fluctuation-Dissipation Theorem", "year": 1951, "summary": "Theorem connecting the response of a system to external perturbations with its internal fluctuations.", "people": ["Herbert Callen", "Theodore Welton"]},
            {"name": "Brownian Motion", "year": 1905, "summary": "Random motion of particles suspended in a fluid resulting from collisions with surrounding molecules.", "people": ["Albert Einstein", "Marian Smoluchowski"]},
            {"name": "Diffusion Processes", "year": 1905, "summary": "Process by which particles spread from regions of high concentration to regions of low concentration.", "people": ["Albert Einstein", "Adolf Fick"]}
          ]
        }
      ]
    },
    {
      "name": "Electromagnetism",
      "year": 1865,
      "children": [
        {
          "name": "Classical Electrodynamics",
          "year": 1865,
          "children": [
            {"name": "Maxwell's Equations", "year": 1865, "summary": "Four fundamental equations describing electricity, magnetism, and their relationship.", "people": ["James Clerk Maxwell"]},
            {"name": "Electromagnetic Waves", "year": 1865, "summary": "Oscillating electric and magnetic fields that propagate through space.", "people": ["James Clerk Maxwell", "Heinrich Hertz"]},
            {"name": "Lorentz Force", "year": 1895, "summary": "Force experienced by a charged particle moving through electric and magnetic fields.", "people": ["Hendrik Lorentz"], "tags": ["force"]},
            {"name": "Gauss's Law", "year": 1835, "summary": "Relationship between electric flux through a closed surface and enclosed charge.", "people": ["Carl Friedrich Gauss"]}
          ]
        },
        {
          "name": "Optics",
          "year": 1801,
          "children": [
            {"name": "Wave Optics", "year": 1801, "summary": "Branch of optics that treats light as a wave, explaining phenomena like interference and diffraction.", "people": ["Thomas Young"]},
            {"name": "Geometric Optics", "year": 1637, "summary": "Branch of optics that treats light as rays, describing reflection and refraction using geometric principles.", "people": ["René Descartes"]},
            {"name": "Interference", "year": 1801, "summary": "Phenomenon where two or more waves superpose to form a resultant wave of greater or lower amplitude.", "people": ["Thomas Young"]},
            {"name": "Diffraction", "year": 1665, "summary": "Bending and spreading of waves around obstacles or through apertures, characteristic of wave behavior.", "people": ["Francesco Maria Grimaldi", "Christiaan Huygens"]}
          ]
        },
        {
          "name": "Plasma Physics",
          "year": 1928,
          "children": [
            {"name": "Magnetohydrodynamics", "year": 1942, "summary": "Study of the dynamics of electrically conducting fluids in magnetic fields.", "people": ["Hannes Alfvén"]},
            {"name": "Plasma Waves", "year": 1928, "summary": "Oscillations and waves that propagate through plasma, a state of matter with free charged particles.", "people": ["Irving Langmuir", "Lewi Tonks"]},
            {"name": "Fusion Theory", "year": 1950, "summary": "Theoretical framework describing nuclear fusion, the process of combining light atomic nuclei to form heavier ones.", "people": ["Lyman Spitzer"]},
            {"name": "Solar Wind Models", "year": 1958, "summary": "Theoretical models describing the continuous stream of charged particles emitted from the Sun's corona.", "people": ["Eugene Parker"]}
          ]
        }
      ]
    },
    {
      "name": "Particle Physics",
      "year": 1930,
      "children": [
        {
          "name": "Elementary Particles",
          "year": 1932,
          "children": [
            {"name": "Quarks", "year": 1964, "summary": "Elementary particles that combine to form composite particles like protons and neutrons.", "people": ["Murray Gell-Mann", "George Zweig"]},
            {"name": "Leptons", "year": 1947, "summary": "Class of elementary particles that do not participate in strong interactions, including electrons and neutrinos.", "people": ["Cecil Powell"]},
            {"name": "Gauge Bosons", "year": 1983, "people": ["Carlo Rubbia", "Simon van der Meer"], "tags": ["force"]},
            {"name": "Higgs Boson", "year": 2012, "summary": "Elementary particle that gives mass to other particles through the Higgs field.", "people": ["Peter Higgs", "François Englert"]}
          ]
        },
        {
          "name": "Symmetries",
          "year": 1918,
          "children": [
            {"name": "Gauge Symmetry", "year": 1918, "summary": "Symmetry principle underlying the fundamental forces, describing invariance under local transformations.", "people": ["Hermann Weyl"]},
            {"name": "CP Violation", "year": 1964, "summary": "Violation of the combined symmetry of charge conjugation and parity, explaining matter-antimatter asymmetry.", "people": ["James Cronin", "Val Fitch"]},
            {"name": "Supersymmetry", "year": 1971, "summary": "Theoretical symmetry relating fermions and bosons, proposing a partner particle for each known particle.", "people": ["Yuri Golfand", "Evgeny Likhtman"]},
            {"name": "String Theory", "year": 1970, "summary": "Theoretical framework proposing that fundamental particles are one-dimensional vibrating strings rather than point particles.", "people": ["Yoichiro Nambu", "Holger Bech Nielsen", "Leonard Susskind"]}
          ]
        },
        {
          "name": "Accelerator Physics",
          "year": 1930,
          "children": [
            {"name": "Collider Experiments", "year": 1956, "summary": "Experiments using particle accelerators to collide particles at high energies to study fundamental physics.", "people": ["Donald Kerst"]},
            {"name": "Particle Detectors", "year": 1911, "summary": "Instruments designed to detect and measure properties of subatomic particles and radiation.", "people": ["Hans Geiger", "Ernest Rutherford"]},
            {"name": "Beam Dynamics", "year": 1950, "summary": "Study of the motion and control of charged particle beams in accelerators and storage rings.", "people": ["Ernest Courant", "Milton Livingston", "Hartland Snyder"]},
            {"name": "Synchrotron Radiation", "year": 1947, "summary": "Electromagnetic radiation emitted when charged particles are accelerated in curved paths, typically in synchrotrons.", "people": ["Elder", "Gurewitsch", "Langmuir"]}
          ]
        }
      ]
    }
  ]
};

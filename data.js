// Physics Theories and Models Data
const physicsData = {
  "name": "Physics Universe as known today",
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
            {"name": "Newton's Laws of Motion", "year": 1687, "summary": "Three fundamental laws describing the relationship between motion and forces.", "people": ["Isaac Newton"]},
            {"name": "Universal Gravitation", "year": 1687, "summary": "Every particle attracts every other particle with a force proportional to their masses.", "people": ["Isaac Newton"]},
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
            {"name": "Standard Model", "year": 1975, "summary": "Theory describing three of the four fundamental forces and all known elementary particles.", "people": ["Sheldon Glashow", "Abdus Salam", "Steven Weinberg"]},
            {"name": "Quantum Electrodynamics", "year": 1948, "summary": "Quantum field theory of electromagnetism describing interactions of light and matter.", "people": ["Richard Feynman", "Julian Schwinger", "Sin-Itiro Tomonaga"]},
            {"name": "Quantum Chromodynamics", "year": 1973, "summary": "Theory of the strong nuclear force that binds quarks and gluons.", "people": ["Murray Gell-Mann", "Harald Fritzsch", "Heinrich Leutwyler"]},
            {"name": "Electroweak Theory", "year": 1967, "summary": "Unified description of electromagnetic and weak nuclear forces.", "people": ["Sheldon Glashow", "Abdus Salam", "Steven Weinberg"]}
          ]
        },
        {
          "name": "Quantum Information",
          "year": 1980,
          "children": [
            {"name": "Quantum Computing", "year": 1982, "people": ["Richard Feynman", "Paul Benioff", "Yuri Manin"]},
            {"name": "Quantum Cryptography", "year": 1984, "people": ["Charles Bennett", "Gilles Brassard"]},
            {"name": "Bell's Theorem", "year": 1964, "people": ["John Stewart Bell"]},
            {"name": "Quantum Teleportation", "year": 1993, "people": ["Charles Bennett", "Gilles Brassard", "Claude Crépeau", "Richard Jozsa", "Asher Peres", "William Wootters"]}
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
            {"name": "Lorentz Transformations", "year": 1904, "people": ["Hendrik Lorentz"]},
            {"name": "Time Dilation", "year": 1905, "people": ["Albert Einstein"]},
            {"name": "Length Contraction", "year": 1905, "people": ["Albert Einstein"]},
            {"name": "Mass-Energy Equivalence", "year": 1905, "people": ["Albert Einstein"]}
          ]
        },
        {
          "name": "General Relativity",
          "year": 1915,
          "children": [
            {"name": "Einstein Field Equations", "year": 1915, "summary": "Set of equations describing how matter and energy curve spacetime.", "people": ["Albert Einstein"]},
            {"name": "Black Holes", "year": 1916, "summary": "Regions of spacetime where gravity is so strong that nothing can escape.", "people": ["Karl Schwarzschild", "Albert Einstein"]},
            {"name": "Gravitational Waves", "year": 1916, "summary": "Ripples in spacetime caused by accelerating massive objects.", "people": ["Albert Einstein"]},
            {"name": "Cosmological Models", "year": 1917, "summary": "Theoretical frameworks describing the large-scale structure and evolution of the universe.", "people": ["Albert Einstein", "Willem de Sitter", "Alexander Friedmann"]}
          ]
        },
        {
          "name": "Relativistic Mechanics",
          "year": 1905,
          "children": [
            {"name": "Relativistic Kinematics", "year": 1905, "people": ["Albert Einstein"]},
            {"name": "Relativistic Dynamics", "year": 1905, "people": ["Albert Einstein"]},
            {"name": "Minkowski Spacetime", "year": 1908, "people": ["Hermann Minkowski"]},
            {"name": "Twin Paradox", "year": 1911, "people": ["Albert Einstein", "Paul Langevin"]}
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
            {"name": "Laws of Thermodynamics", "year": 1850, "people": ["Rudolf Clausius", "William Thomson"]},
            {"name": "Entropy", "year": 1865, "people": ["Rudolf Clausius"]},
            {"name": "Heat Engines", "year": 1824, "people": ["Sadi Carnot"]},
            {"name": "Carnot Cycle", "year": 1824, "people": ["Sadi Carnot"]}
          ]
        },
        {
          "name": "Statistical Mechanics",
          "year": 1871,
          "children": [
            {"name": "Boltzmann Distribution", "year": 1871, "people": ["Ludwig Boltzmann"]},
            {"name": "Fermi-Dirac Statistics", "year": 1926, "people": ["Enrico Fermi", "Paul Dirac"]},
            {"name": "Bose-Einstein Statistics", "year": 1924, "people": ["Satyendra Nath Bose", "Albert Einstein"]},
            {"name": "Partition Function", "year": 1902, "people": ["Josiah Willard Gibbs"]}
          ]
        },
        {
          "name": "Non-Equilibrium Thermodynamics",
          "year": 1931,
          "children": [
            {"name": "Onsager reciprocal relations", "year": 1931, "people": ["Lars Onsager"]},
            {"name": "Fluctuation-Dissipation Theorem", "year": 1951, "people": ["Herbert Callen", "Theodore Welton"]},
            {"name": "Brownian Motion", "year": 1905, "people": ["Albert Einstein", "Marian Smoluchowski"]},
            {"name": "Diffusion Processes", "year": 1905, "people": ["Albert Einstein", "Adolf Fick"]}
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
            {"name": "Lorentz Force", "year": 1895, "summary": "Force experienced by a charged particle moving through electric and magnetic fields.", "people": ["Hendrik Lorentz"]},
            {"name": "Gauss's Law", "year": 1835, "summary": "Relationship between electric flux through a closed surface and enclosed charge.", "people": ["Carl Friedrich Gauss"]}
          ]
        },
        {
          "name": "Optics",
          "year": 1801,
          "children": [
            {"name": "Wave Optics", "year": 1801, "people": ["Thomas Young"]},
            {"name": "Geometric Optics", "year": 1637, "people": ["René Descartes"]},
            {"name": "Interference", "year": 1801, "people": ["Thomas Young"]},
            {"name": "Diffraction", "year": 1665, "people": ["Francesco Maria Grimaldi", "Christiaan Huygens"]}
          ]
        },
        {
          "name": "Plasma Physics",
          "year": 1928,
          "children": [
            {"name": "Magnetohydrodynamics", "year": 1942, "people": ["Hannes Alfvén"]},
            {"name": "Plasma Waves", "year": 1928, "people": ["Irving Langmuir", "Lewi Tonks"]},
            {"name": "Fusion Theory", "year": 1950, "people": ["Lyman Spitzer"]},
            {"name": "Solar Wind Models", "year": 1958, "people": ["Eugene Parker"]}
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
            {"name": "Quarks", "year": 1964, "people": ["Murray Gell-Mann", "George Zweig"]},
            {"name": "Leptons", "year": 1947, "people": ["Cecil Powell"]},
            {"name": "Gauge Bosons", "year": 1983, "people": ["Carlo Rubbia", "Simon van der Meer"]},
            {"name": "Higgs Boson", "year": 2012, "summary": "Elementary particle that gives mass to other particles through the Higgs field.", "people": ["Peter Higgs", "François Englert"]}
          ]
        },
        {
          "name": "Symmetries",
          "year": 1918,
          "children": [
            {"name": "Gauge Symmetry", "year": 1918, "people": ["Hermann Weyl"]},
            {"name": "CP Violation", "year": 1964, "people": ["James Cronin", "Val Fitch"]},
            {"name": "Supersymmetry", "year": 1971, "people": ["Yuri Golfand", "Evgeny Likhtman"]},
            {"name": "String Theory", "year": 1970, "people": ["Yoichiro Nambu", "Holger Bech Nielsen", "Leonard Susskind"]}
          ]
        },
        {
          "name": "Accelerator Physics",
          "year": 1930,
          "children": [
            {"name": "Collider Experiments", "year": 1956, "people": ["Donald Kerst"]},
            {"name": "Particle Detectors", "year": 1911, "people": ["Hans Geiger", "Ernest Rutherford"]},
            {"name": "Beam Dynamics", "year": 1950, "people": ["Ernest Courant", "Milton Livingston", "Hartland Snyder"]},
            {"name": "Synchrotron Radiation", "year": 1947, "people": ["Elder", "Gurewitsch", "Langmuir"]}
          ]
        }
      ]
    }
  ]
};

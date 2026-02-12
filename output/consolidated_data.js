// Auto-generated file - do not edit manually
const consolidatedData = {
  "model": {
    "name": "Physics Theory Model",
    "version": "26.02.10.1",
    "author": "Exergy ∞ LLC",
    "include_x_fields": false,
    "max_name_underscores": 2,
    "exclude": null
  },
  "data": {
    "assumption": {},
    "postulate": {},
    "claim": {},
    "theory": {
      "action-principle": {
        "theory_id": "action-principle",
        "name": "Action Principle",
        "year": 1744,
        "summary": "Physical systems follow paths that minimize or maximize the action integral",
        "category": "Classical Mechanics",
        "parent_theory_id": "analytical-mechanics",
        "people": [
          "pierre-maupertuis"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "ap-assumption-1",
            "statement": "Time is absolute and provides the integration variable for the action",
            "rationale": "The action S = ∫L dt integrates over absolute time",
            "c": 1,
            "v": 1
          }
        ]
      },
      "analytical-mechanics": {
        "theory_id": "analytical-mechanics",
        "name": "Analytical Mechanics",
        "year": 1788,
        "summary": "Reformulation of mechanics using variational principles and energy-based approaches",
        "category": "Classical Mechanics",
        "parent_theory_id": "classical-mechanics",
        "people": [
          "joseph-lagrange",
          "william-hamilton"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "am-assumption-1",
            "statement": "Time is absolute and global",
            "rationale": "Analytical mechanics still operates within the framework of absolute time",
            "c": 1,
            "v": 1
          }
        ]
      },
      "black-holes": {
        "theory_id": "black-holes",
        "name": "Black Holes",
        "year": 1916,
        "summary": "Regions of spacetime where gravity is so strong that nothing can escape",
        "category": "Relativity",
        "parent_theory_id": "general-relativity",
        "nobel_year": 2020,
        "people": [
          "karl-schwarzschild",
          "albert-einstein"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "bh-assumption-1",
            "statement": "Matter can collapse to a point where the escape velocity exceeds the speed of light",
            "rationale": "This follows from the Schwarzschild solution of the Einstein field equations",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "bh-claim-1",
            "statement": "Black holes have an event horizon beyond which nothing can escape",
            "status": "verified",
            "verification_year": 2019,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "bh-claim-2",
            "statement": "Black holes emit Hawking radiation and can evaporate over time",
            "status": "theoretical",
            "c": 1,
            "v": 1
          }
        ]
      },
      "classical-mechanics": {
        "theory_id": "classical-mechanics",
        "name": "Classical Mechanics",
        "year": 1687,
        "summary": "Branch of physics that describes the motion of macroscopic objects under the influence of forces. Based on Newton's laws of motion and the assumption of absolute space and time.",
        "category": "Classical Mechanics",
        "people": [
          "isaac-newton"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "cm-assumption-1",
            "statement": "Time is absolute and global - it flows uniformly and identically for all observers, regardless of their motion or position",
            "rationale": "This fundamental assumption distinguishes classical mechanics from relativity, where time is relative. In classical mechanics, there is a universal 'now' that all observers share.",
            "c": 1,
            "v": 1
          },
          {
            "assumption_id": "cm-assumption-2",
            "statement": "Space is absolute - it exists as a fixed, unchanging background independent of matter and energy",
            "rationale": "Space is treated as a three-dimensional Euclidean space that provides the stage for physical events, but is not affected by them",
            "c": 1,
            "v": 1
          },
          {
            "assumption_id": "cm-assumption-3",
            "statement": "Objects have definite positions and velocities that can be measured simultaneously with arbitrary precision",
            "rationale": "Unlike quantum mechanics, classical mechanics assumes no fundamental uncertainty in position and momentum measurements",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "cm-claim-1",
            "statement": "The laws of motion accurately describe the behavior of macroscopic objects at everyday speeds",
            "status": "verified",
            "verification_year": 1687,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "cm-claim-2",
            "statement": "Classical mechanics breaks down at very high speeds (approaching the speed of light) and for very small objects (atomic scale)",
            "status": "verified",
            "verification_year": 1905,
            "c": 1,
            "v": 1
          }
        ],
        "postulates": [
          {
            "postulate_id": "cm-postulate-1",
            "statement": "Newton's First Law: An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by an external force",
            "formulation_year": 1687,
            "c": 1,
            "v": 1
          },
          {
            "postulate_id": "cm-postulate-2",
            "statement": "Newton's Second Law: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass (F = ma)",
            "formulation_year": 1687,
            "c": 1,
            "v": 1
          },
          {
            "postulate_id": "cm-postulate-3",
            "statement": "Newton's Third Law: For every action, there is an equal and opposite reaction",
            "formulation_year": 1687,
            "c": 1,
            "v": 1
          }
        ]
      },
      "conservation-of-energy": {
        "theory_id": "conservation-of-energy",
        "name": "Conservation of Energy",
        "year": 1847,
        "summary": "Energy cannot be created or destroyed, only transformed from one form to another",
        "category": "Classical Mechanics",
        "parent_theory_id": "newtonian-mechanics",
        "people": [
          "julius-mayer",
          "james-joule"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "coe-assumption-1",
            "statement": "Time is absolute and flows uniformly",
            "rationale": "Energy conservation requires a consistent time coordinate across all observers",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "coe-claim-1",
            "statement": "Total energy in an isolated system remains constant over time",
            "status": "verified",
            "verification_year": 1847,
            "c": 1,
            "v": 1
          }
        ]
      },
      "conservation-of-momentum": {
        "theory_id": "conservation-of-momentum",
        "name": "Conservation of Momentum",
        "year": 1644,
        "summary": "Total momentum of a closed system remains constant in the absence of external forces",
        "category": "Classical Mechanics",
        "parent_theory_id": "newtonian-mechanics",
        "people": [
          "rene-descartes"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "com-assumption-1",
            "statement": "Time is absolute and uniform",
            "rationale": "Required for momentum conservation to hold consistently across all reference frames",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "com-claim-1",
            "statement": "Momentum is conserved in all closed systems",
            "status": "verified",
            "verification_year": 1644,
            "c": 1,
            "v": 1
          }
        ]
      },
      "contracted-bianchi-identities": {
        "theory_id": "contracted-bianchi-identities",
        "name": "Contracted Bianchi Identities",
        "year": 1915,
        "summary": "Fundamental differential identities in general relativity that ensure the Einstein tensor is divergence-free",
        "category": "Relativity",
        "parent_theory_id": "general-relativity",
        "people": [
          "luigi-bianchi",
          "albert-einstein"
        ],
        "papers": [
          "bianchi-identity"
        ],
        "c": 1,
        "v": 1,
        "claims": [
          {
            "claim_id": "bianchi-claim-1",
            "statement": "The Einstein field equations automatically satisfy energy-momentum conservation without requiring it as a separate postulate",
            "status": "theoretical",
            "c": 1,
            "v": 1
          }
        ],
        "postulates": [
          {
            "postulate_id": "bianchi-postulate-1",
            "statement": "The contracted Bianchi identities yield ∇_μ G^μν = 0, ensuring energy-momentum conservation",
            "formulation_year": 1915,
            "c": 1,
            "v": 1
          }
        ]
      },
      "einstein-field-equations": {
        "theory_id": "einstein-field-equations",
        "name": "Einstein Field Equations",
        "year": 1915,
        "summary": "Set of equations describing how matter and energy curve spacetime",
        "category": "Relativity",
        "parent_theory_id": "general-relativity",
        "people": [
          "albert-einstein"
        ],
        "papers": [
          "einstein-1915-field-equations"
        ],
        "tags": [
          "force"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "efe-assumption-1",
            "statement": "The Einstein tensor G_μν is proportional to the stress-energy tensor T_μν",
            "rationale": "This relates the geometry of spacetime (left side) to the matter-energy content (right side)",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "efe-claim-1",
            "statement": "The field equations reduce to Newton's law of gravitation in the weak-field, low-velocity limit",
            "status": "verified",
            "verification_year": 1915,
            "c": 1,
            "v": 1
          }
        ],
        "postulates": [
          {
            "postulate_id": "efe-postulate-1",
            "statement": "The contracted Bianchi identities ensure energy-momentum conservation: ∇_μ G^μν = 0",
            "formulation_year": 1915,
            "c": 1,
            "v": 1
          }
        ]
      },
      "flrw-metric": {
        "theory_id": "flrw-metric",
        "name": "FLRW Metric",
        "year": 1935,
        "summary": "Friedmann-Lemaître-Robertson-Walker metric describing a homogeneous, isotropic, expanding or contracting universe",
        "category": "Relativity",
        "parent_theory_id": "general-relativity",
        "people": [
          "alexander-friedmann",
          "georges-lemaitre",
          "howard-robertson",
          "arthur-walker"
        ],
        "papers": [
          "flrw-metric"
        ],
        "tags": [
          "time"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "flrw-assumption-1",
            "statement": "The universe is homogeneous (uniform in space) and isotropic (looks the same in all directions)",
            "rationale": "This cosmological principle simplifies the description of the large-scale universe",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "flrw-claim-1",
            "statement": "The universe can be described by a scale factor a(t) that evolves over time",
            "status": "verified",
            "verification_year": 1929,
            "c": 1,
            "v": 1
          }
        ]
      },
      "general-relativity": {
        "theory_id": "general-relativity",
        "name": "General Relativity",
        "year": 1915,
        "summary": "Theory of gravitation that describes gravity as the curvature of spacetime caused by matter and energy. Replaces Newton's law of universal gravitation and provides a geometric description of gravity.",
        "category": "Relativity",
        "nobel_year": 1921,
        "people": [
          "albert-einstein"
        ],
        "papers": [
          "einstein-1915-field-equations",
          "einstein-1915-foundation"
        ],
        "tags": [
          "force",
          "spacetime",
          "gravity"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "gr-assumption-1",
            "statement": "Spacetime is a four-dimensional manifold that can be curved by the presence of matter and energy",
            "rationale": "This geometric view of spacetime allows gravity to be described as curvature rather than a force",
            "c": 1,
            "v": 1
          },
          {
            "assumption_id": "gr-assumption-2",
            "statement": "The laws of physics are the same in all inertial reference frames (principle of relativity)",
            "rationale": "Extends special relativity to include accelerated frames and gravitational fields",
            "c": 1,
            "v": 1
          },
          {
            "assumption_id": "gr-assumption-3",
            "statement": "The speed of light in vacuum is constant and independent of the motion of the source or observer",
            "rationale": "Carried over from special relativity as a fundamental constant of nature",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "gr-claim-1",
            "statement": "Light rays are bent by gravitational fields",
            "status": "verified",
            "verification_year": 1919,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "gr-claim-2",
            "statement": "Time passes more slowly in stronger gravitational fields (gravitational time dilation)",
            "status": "verified",
            "verification_year": 1971,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "gr-claim-3",
            "statement": "Gravitational waves exist and propagate at the speed of light",
            "status": "verified",
            "verification_year": 2016,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "gr-claim-4",
            "statement": "Black holes can form when matter collapses beyond its Schwarzschild radius",
            "status": "verified",
            "verification_year": 2019,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "gr-claim-5",
            "statement": "The universe can be described by cosmological models with a scale factor that evolves over time",
            "status": "verified",
            "verification_year": 1929,
            "c": 1,
            "v": 1
          }
        ],
        "postulates": [
          {
            "postulate_id": "gr-postulate-1",
            "statement": "The equivalence principle: The effects of gravity are locally indistinguishable from the effects of acceleration",
            "formulation_year": 1907,
            "c": 1,
            "v": 1
          },
          {
            "postulate_id": "gr-postulate-2",
            "statement": "Spacetime curvature is determined by the distribution of matter and energy through the Einstein field equations: G_μν = 8πG/c⁴ T_μν",
            "formulation_year": 1915,
            "c": 1,
            "v": 1
          },
          {
            "postulate_id": "gr-postulate-3",
            "statement": "Free-falling objects follow geodesics (the shortest paths) in curved spacetime",
            "formulation_year": 1915,
            "c": 1,
            "v": 1
          }
        ]
      },
      "hamiltonian-formulation": {
        "theory_id": "hamiltonian-formulation",
        "name": "Hamiltonian Formulation",
        "year": 1834,
        "summary": "Mechanics expressed in terms of position and momentum coordinates",
        "category": "Classical Mechanics",
        "parent_theory_id": "analytical-mechanics",
        "people": [
          "william-hamilton"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "hf-assumption-1",
            "statement": "Time is absolute and global",
            "rationale": "Hamilton's equations describe evolution with respect to absolute time",
            "c": 1,
            "v": 1
          }
        ]
      },
      "lagrangian-formulation": {
        "theory_id": "lagrangian-formulation",
        "name": "Lagrangian Formulation",
        "year": 1788,
        "summary": "Mechanics reformulated using kinetic and potential energy in a single function",
        "category": "Classical Mechanics",
        "parent_theory_id": "analytical-mechanics",
        "people": [
          "joseph-lagrange"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "lf-assumption-1",
            "statement": "Time is absolute and flows uniformly",
            "rationale": "The Lagrangian L(q, q̇, t) explicitly depends on time as an absolute parameter",
            "c": 1,
            "v": 1
          }
        ]
      },
      "lorentz-transformations": {
        "theory_id": "lorentz-transformations",
        "name": "Lorentz Transformations",
        "year": 1904,
        "summary": "Mathematical transformations that relate space and time coordinates between different inertial reference frames",
        "category": "Relativity",
        "parent_theory_id": "special-relativity",
        "people": [
          "hendrik-lorentz"
        ],
        "tags": [
          "time"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "lt-assumption-1",
            "statement": "Spacetime uses Minkowski (hyperbolic) geometry",
            "rationale": "Lorentz transformations preserve the Minkowski metric and are the isometries of hyperbolic spacetime",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "lt-claim-1",
            "statement": "Lorentz transformations preserve the spacetime interval and the speed of light",
            "status": "verified",
            "verification_year": 1904,
            "c": 1,
            "v": 1
          }
        ]
      },
      "minkowski-spacetime": {
        "theory_id": "minkowski-spacetime",
        "name": "Minkowski Spacetime",
        "year": 1908,
        "summary": "Four-dimensional mathematical model combining three-dimensional space with time into a single continuum using hyperbolic geometry",
        "category": "Relativity",
        "parent_theory_id": "special-relativity",
        "people": [
          "hermann-minkowski"
        ],
        "tags": [
          "spacetime",
          "time"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "ms-assumption-1",
            "statement": "Spacetime is a four-dimensional flat manifold with Minkowski (hyperbolic/Lorentzian) geometry",
            "rationale": "The Minkowski metric uses hyperbolic geometry with signature (-, +, +, +), fundamentally different from Euclidean geometry. The spacetime interval is ds² = -c²dt² + dx² + dy² + dz². The hyperbolic structure is a property of the entire spacetime, not just the time dimension, arising from the mixed signature that enables light cones and causality.",
            "c": 1,
            "v": 1
          },
          {
            "assumption_id": "ms-assumption-2",
            "statement": "Time and space are unified into a single four-dimensional continuum",
            "rationale": "Time is treated as a dimension on equal footing with spatial dimensions, but with opposite sign in the metric",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "ms-claim-1",
            "statement": "The Minkowski metric provides the geometric foundation for special relativity",
            "status": "verified",
            "verification_year": 1908,
            "c": 1,
            "v": 1
          }
        ]
      },
      "newtonian-mechanics": {
        "theory_id": "newtonian-mechanics",
        "name": "Newtonian Mechanics",
        "year": 1687,
        "summary": "Mechanics based on Newton's three laws of motion and universal gravitation",
        "category": "Classical Mechanics",
        "parent_theory_id": "classical-mechanics",
        "people": [
          "isaac-newton"
        ],
        "papers": [
          "newton-principia"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "nm-assumption-1",
            "statement": "Time is absolute and flows uniformly for all observers",
            "rationale": "Fundamental to Newtonian mechanics - there is a universal time coordinate",
            "c": 1,
            "v": 1
          },
          {
            "assumption_id": "nm-assumption-2",
            "statement": "Space is Euclidean and absolute",
            "rationale": "Three-dimensional space follows Euclidean geometry and is independent of matter",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "nm-claim-1",
            "statement": "Newton's laws accurately predict planetary motion and everyday mechanical phenomena",
            "status": "verified",
            "verification_year": 1687,
            "c": 1,
            "v": 1
          }
        ],
        "postulates": [
          {
            "postulate_id": "nm-postulate-1",
            "statement": "Newton's Laws of Motion govern the motion of all objects",
            "formulation_year": 1687,
            "c": 1,
            "v": 1
          },
          {
            "postulate_id": "nm-postulate-2",
            "statement": "Universal Gravitation: Every particle attracts every other particle with a force proportional to their masses and inversely proportional to the square of the distance between them",
            "formulation_year": 1687,
            "c": 1,
            "v": 1
          }
        ]
      },
      "newtons-laws-of-motion": {
        "theory_id": "newtons-laws-of-motion",
        "name": "Newton's Laws of Motion",
        "year": 1687,
        "summary": "Three fundamental laws describing the relationship between motion and forces",
        "category": "Classical Mechanics",
        "parent_theory_id": "newtonian-mechanics",
        "people": [
          "isaac-newton"
        ],
        "papers": [
          "newton-principia"
        ],
        "tags": [
          "force"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "nlm-assumption-1",
            "statement": "Time is absolute and global - all observers measure the same time",
            "rationale": "Essential for defining velocity and acceleration consistently across all reference frames",
            "c": 1,
            "v": 1
          }
        ]
      },
      "noethers-theorem": {
        "theory_id": "noethers-theorem",
        "name": "Noether's Theorem",
        "year": 1918,
        "summary": "Fundamental theorem connecting symmetries to conservation laws. States that every differentiable symmetry of the action of a physical system corresponds to a conservation law.",
        "category": "Classical Mechanics",
        "parent_theory_id": "newtonian-mechanics",
        "people": [
          "emmy-noether"
        ],
        "papers": [
          "noether-invariante"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "nt-assumption-1",
            "statement": "Physical systems can be described by an action principle",
            "rationale": "The theorem applies to systems with well-defined Lagrangians and actions",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "nt-claim-1",
            "statement": "Time translation symmetry implies conservation of energy",
            "status": "verified",
            "verification_year": 1918,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "nt-claim-2",
            "statement": "Spatial translation symmetry implies conservation of momentum",
            "status": "verified",
            "verification_year": 1918,
            "c": 1,
            "v": 1
          }
        ]
      },
      "relativistic-dynamics": {
        "theory_id": "relativistic-dynamics",
        "name": "Relativistic Dynamics",
        "year": 1905,
        "summary": "Study of motion under the influence of forces, incorporating relativistic corrections",
        "category": "Relativity",
        "parent_theory_id": "relativistic-mechanics",
        "people": [
          "albert-einstein"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "rd-assumption-1",
            "statement": "Spacetime uses Minkowski (hyperbolic) geometry",
            "rationale": "Relativistic dynamics requires the hyperbolic metric structure of Minkowski spacetime",
            "c": 1,
            "v": 1
          }
        ]
      },
      "relativistic-kinematics": {
        "theory_id": "relativistic-kinematics",
        "name": "Relativistic Kinematics",
        "year": 1905,
        "summary": "Study of motion in the absence of forces, accounting for relativistic effects",
        "category": "Relativity",
        "parent_theory_id": "relativistic-mechanics",
        "people": [
          "albert-einstein"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "rk-assumption-1",
            "statement": "Spacetime follows Minkowski (hyperbolic) geometry",
            "rationale": "Relativistic kinematics is based on the hyperbolic geometry of Minkowski spacetime",
            "c": 1,
            "v": 1
          }
        ]
      },
      "relativistic-mechanics": {
        "theory_id": "relativistic-mechanics",
        "name": "Relativistic Mechanics",
        "year": 1905,
        "summary": "Mechanics reformulated to account for relativistic effects at high velocities",
        "category": "Relativity",
        "parent_theory_id": "special-relativity",
        "people": [
          "albert-einstein"
        ],
        "c": 1,
        "v": 1
      },
      "ricci-curvature": {
        "theory_id": "ricci-curvature",
        "name": "Ricci Curvature",
        "year": 1904,
        "summary": "Mathematical tensor that measures the degree to which the geometry of a space differs from that of flat Euclidean space",
        "category": "Relativity",
        "parent_theory_id": "general-relativity",
        "people": [
          "gregorio-ricci-curbastro",
          "albert-einstein"
        ],
        "papers": [
          "ricci-1904-absolute-calculus"
        ],
        "c": 1,
        "v": 1,
        "claims": [
          {
            "claim_id": "ricci-claim-1",
            "statement": "The Ricci tensor is a contraction of the Riemann curvature tensor",
            "status": "theoretical",
            "c": 1,
            "v": 1
          }
        ]
      },
      "riemann-curvature-tensor": {
        "theory_id": "riemann-curvature-tensor",
        "name": "Riemann Curvature Tensor",
        "year": 1854,
        "summary": "Fundamental tensor in differential geometry that completely characterizes the intrinsic curvature of a manifold",
        "category": "Relativity",
        "parent_theory_id": "general-relativity",
        "people": [
          "bernhard-riemann"
        ],
        "papers": [
          "riemann-1854-geometry"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "riemann-assumption-1",
            "statement": "Space can be described as a differentiable manifold with a metric tensor",
            "rationale": "This allows the application of differential geometry to describe curved spaces",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "riemann-claim-1",
            "statement": "The Riemann tensor measures the failure of parallel transport to be path-independent",
            "status": "theoretical",
            "c": 1,
            "v": 1
          }
        ]
      },
      "special-relativity": {
        "theory_id": "special-relativity",
        "name": "Special Relativity",
        "year": 1905,
        "summary": "Theory of physics that describes the relationship between space and time in inertial reference frames. Based on the constancy of the speed of light and the principle of relativity.",
        "category": "Relativity",
        "nobel_year": 1921,
        "people": [
          "albert-einstein"
        ],
        "papers": [
          "einstein-1905-relativity"
        ],
        "tags": [
          "spacetime",
          "time"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "sr-assumption-1",
            "statement": "Spacetime is flat and uses Minkowski geometry (hyperbolic/Lorentzian geometry) with metric signature (-, +, +, +)",
            "rationale": "Special relativity assumes flat spacetime with hyperbolic geometry, where the spacetime interval ds² = -c²dt² + dx² + dy² + dz². The hyperbolic nature is a property of the entire 4D spacetime manifold (not just the time dimension), arising from the mixed signature that distinguishes time from space. This is fundamentally different from Euclidean geometry used in classical mechanics.",
            "c": 1,
            "v": 1
          },
          {
            "assumption_id": "sr-assumption-2",
            "statement": "The laws of physics are the same in all inertial reference frames (principle of relativity)",
            "rationale": "No preferred inertial frame exists; physics is the same for all observers moving at constant velocity relative to each other",
            "c": 1,
            "v": 1
          },
          {
            "assumption_id": "sr-assumption-3",
            "statement": "The speed of light in vacuum is constant and independent of the motion of the source or observer",
            "rationale": "This fundamental postulate leads to time dilation, length contraction, and the relativity of simultaneity",
            "c": 1,
            "v": 1
          },
          {
            "assumption_id": "sr-assumption-4",
            "statement": "Time is relative - there is no absolute, global time. Simultaneity is relative to the observer's reference frame",
            "rationale": "In contrast to classical mechanics, special relativity shows that time flows differently for observers in relative motion",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "sr-claim-1",
            "statement": "Time dilation: Moving clocks run slower than stationary clocks",
            "status": "verified",
            "verification_year": 1971,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "sr-claim-2",
            "statement": "Length contraction: Objects in motion appear shorter in the direction of motion",
            "status": "verified",
            "verification_year": 1905,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "sr-claim-3",
            "statement": "Relativity of simultaneity: Events that are simultaneous in one frame are not simultaneous in another frame moving relative to the first",
            "status": "verified",
            "verification_year": 1905,
            "c": 1,
            "v": 1
          },
          {
            "claim_id": "sr-claim-4",
            "statement": "Mass-energy equivalence: E = mc²",
            "status": "verified",
            "verification_year": 1905,
            "c": 1,
            "v": 1
          }
        ],
        "postulates": [
          {
            "postulate_id": "sr-postulate-1",
            "statement": "The principle of relativity: The laws of physics are identical in all inertial frames of reference",
            "formulation_year": 1905,
            "c": 1,
            "v": 1
          },
          {
            "postulate_id": "sr-postulate-2",
            "statement": "The constancy of the speed of light: The speed of light in vacuum is the same for all observers, regardless of the motion of the light source or observer",
            "formulation_year": 1905,
            "c": 1,
            "v": 1
          }
        ]
      },
      "twin-paradox": {
        "theory_id": "twin-paradox",
        "name": "Twin Paradox",
        "year": 1911,
        "summary": "Thought experiment demonstrating time dilation where a traveling twin ages slower than a stationary twin",
        "category": "Relativity",
        "parent_theory_id": "special-relativity",
        "people": [
          "albert-einstein",
          "paul-langevin"
        ],
        "tags": [
          "time"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "tp-assumption-1",
            "statement": "Time is relative and spacetime uses Minkowski (hyperbolic) geometry",
            "rationale": "The twin paradox demonstrates the non-Euclidean nature of time in Minkowski spacetime",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "tp-claim-1",
            "statement": "A traveling twin will age less than a stationary twin due to time dilation",
            "status": "verified",
            "verification_year": 1971,
            "c": 1,
            "v": 1
          }
        ]
      },
      "universal-gravitation": {
        "theory_id": "universal-gravitation",
        "name": "Universal Gravitation",
        "year": 1687,
        "summary": "Every particle attracts every other particle with a force proportional to their masses",
        "category": "Classical Mechanics",
        "parent_theory_id": "newtonian-mechanics",
        "people": [
          "isaac-newton"
        ],
        "tags": [
          "force"
        ],
        "c": 1,
        "v": 1,
        "assumptions": [
          {
            "assumption_id": "ug-assumption-1",
            "statement": "Gravitational force acts instantaneously across any distance",
            "rationale": "Assumes action at a distance without propagation delay, in contrast to general relativity where gravity propagates at the speed of light",
            "c": 1,
            "v": 1
          }
        ],
        "claims": [
          {
            "claim_id": "ug-claim-1",
            "statement": "Gravitational force follows an inverse-square law: F = G(m₁m₂)/r²",
            "status": "verified",
            "verification_year": 1687,
            "c": 1,
            "v": 1
          }
        ]
      }
    },
    "person": {
      "albert-einstein": {
        "person_id": "albert-einstein",
        "name": "Albert Einstein",
        "birth_year": 1879,
        "death_year": 1955,
        "c": 1,
        "v": 1
      },
      "alexander-friedmann": {
        "person_id": "alexander-friedmann",
        "name": "Alexander Friedmann",
        "birth_year": 1888,
        "death_year": 1925,
        "c": 1,
        "v": 1
      },
      "arthur-walker": {
        "person_id": "arthur-walker",
        "name": "Arthur Geoffrey Walker",
        "birth_year": 1909,
        "death_year": 2001,
        "c": 1,
        "v": 1
      },
      "bernhard-riemann": {
        "person_id": "bernhard-riemann",
        "name": "Bernhard Riemann",
        "birth_year": 1826,
        "death_year": 1866,
        "c": 1,
        "v": 1
      },
      "emmy-noether": {
        "person_id": "emmy-noether",
        "name": "Emmy Noether",
        "birth_year": 1882,
        "death_year": 1935,
        "c": 1,
        "v": 1
      },
      "georges-lemaitre": {
        "person_id": "georges-lemaitre",
        "name": "Georges Lemaître",
        "birth_year": 1894,
        "death_year": 1966,
        "c": 1,
        "v": 1
      },
      "gregorio-ricci-curbastro": {
        "person_id": "gregorio-ricci-curbastro",
        "name": "Gregorio Ricci-Curbastro",
        "birth_year": 1853,
        "death_year": 1925,
        "c": 1,
        "v": 1
      },
      "hendrik-lorentz": {
        "person_id": "hendrik-lorentz",
        "name": "Hendrik Lorentz",
        "birth_year": 1853,
        "death_year": 1928,
        "c": 1,
        "v": 1
      },
      "hermann-minkowski": {
        "person_id": "hermann-minkowski",
        "name": "Hermann Minkowski",
        "birth_year": 1864,
        "death_year": 1909,
        "c": 1,
        "v": 1
      },
      "howard-robertson": {
        "person_id": "howard-robertson",
        "name": "Howard P. Robertson",
        "birth_year": 1903,
        "death_year": 1961,
        "c": 1,
        "v": 1
      },
      "isaac-newton": {
        "person_id": "isaac-newton",
        "name": "Isaac Newton",
        "birth_year": 1643,
        "death_year": 1727,
        "c": 1,
        "v": 1
      },
      "james-joule": {
        "person_id": "james-joule",
        "name": "James Prescott Joule",
        "birth_year": 1818,
        "death_year": 1889,
        "c": 1,
        "v": 1
      },
      "joseph-lagrange": {
        "person_id": "joseph-lagrange",
        "name": "Joseph-Louis Lagrange",
        "birth_year": 1736,
        "death_year": 1813,
        "c": 1,
        "v": 1
      },
      "julius-mayer": {
        "person_id": "julius-mayer",
        "name": "Julius Robert von Mayer",
        "birth_year": 1814,
        "death_year": 1878,
        "c": 1,
        "v": 1
      },
      "karl-schwarzschild": {
        "person_id": "karl-schwarzschild",
        "name": "Karl Schwarzschild",
        "birth_year": 1873,
        "death_year": 1916,
        "c": 1,
        "v": 1
      },
      "luigi-bianchi": {
        "person_id": "luigi-bianchi",
        "name": "Luigi Bianchi",
        "birth_year": 1856,
        "death_year": 1928,
        "c": 1,
        "v": 1
      },
      "paul-langevin": {
        "person_id": "paul-langevin",
        "name": "Paul Langevin",
        "birth_year": 1872,
        "death_year": 1946,
        "c": 1,
        "v": 1
      },
      "pierre-maupertuis": {
        "person_id": "pierre-maupertuis",
        "name": "Pierre Louis Maupertuis",
        "birth_year": 1698,
        "death_year": 1759,
        "c": 1,
        "v": 1
      },
      "rene-descartes": {
        "person_id": "rene-descartes",
        "name": "René Descartes",
        "birth_year": 1596,
        "death_year": 1650,
        "c": 1,
        "v": 1
      },
      "william-hamilton": {
        "person_id": "william-hamilton",
        "name": "William Rowan Hamilton",
        "birth_year": 1805,
        "death_year": 1865,
        "c": 1,
        "v": 1
      }
    },
    "paper": {
      "bianchi-identity": {
        "paper_id": "bianchi-identity",
        "title": "Bianchi identity",
        "year": 1915,
        "link": "https://en.wikipedia.org/wiki/Bianchi_identity",
        "authors": [
          "luigi-bianchi",
          "albert-einstein"
        ],
        "c": 1,
        "v": 1
      },
      "einstein-1905-relativity": {
        "paper_id": "einstein-1905-relativity",
        "title": "On the Electrodynamics of Moving Bodies",
        "year": 1905,
        "link": "https://en.wikipedia.org/wiki/Annus_Mirabilis_papers",
        "authors": [
          "albert-einstein"
        ],
        "c": 1,
        "v": 1
      },
      "einstein-1915-field-equations": {
        "paper_id": "einstein-1915-field-equations",
        "title": "The Field Equations of Gravitation",
        "year": 1915,
        "link": "https://en.wikipedia.org/wiki/Einstein_field_equations",
        "authors": [
          "albert-einstein"
        ],
        "c": 1,
        "v": 1
      },
      "einstein-1915-foundation": {
        "paper_id": "einstein-1915-foundation",
        "title": "On the General Theory of Relativity",
        "year": 1915,
        "link": "https://en.wikipedia.org/wiki/General_relativity",
        "authors": [
          "albert-einstein"
        ],
        "c": 1,
        "v": 1
      },
      "flrw-metric": {
        "paper_id": "flrw-metric",
        "title": "FLRW metric",
        "year": 1935,
        "link": "https://en.wikipedia.org/wiki/Friedmann%E2%80%93Lema%C3%AEtre%E2%80%93Robertson%E2%80%93Walker_metric",
        "authors": [
          "alexander-friedmann",
          "georges-lemaitre",
          "howard-robertson",
          "arthur-walker"
        ],
        "c": 1,
        "v": 1
      },
      "newton-principia": {
        "paper_id": "newton-principia",
        "title": "Philosophiæ Naturalis Principia Mathematica",
        "year": 1687,
        "link": "https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica",
        "authors": [
          "isaac-newton"
        ],
        "c": 1,
        "v": 1
      },
      "noether-invariante": {
        "paper_id": "noether-invariante",
        "title": "Invariante Variationsprobleme",
        "year": 1918,
        "link": "https://en.wikipedia.org/wiki/Noether%27s_theorem",
        "authors": [
          "emmy-noether"
        ],
        "c": 1,
        "v": 1
      },
      "ricci-1904-absolute-calculus": {
        "paper_id": "ricci-1904-absolute-calculus",
        "title": "Méthodes de calcul différentiel absolu et leurs applications",
        "year": 1904,
        "link": "https://en.wikipedia.org/wiki/Ricci_curvature",
        "authors": [
          "gregorio-ricci-curbastro"
        ],
        "c": 1,
        "v": 1
      },
      "riemann-1854-geometry": {
        "paper_id": "riemann-1854-geometry",
        "title": "On the Hypotheses Which Lie at the Bases of Geometry",
        "year": 1854,
        "link": "https://en.wikipedia.org/wiki/Riemann_curvature_tensor",
        "authors": [
          "bernhard-riemann"
        ],
        "c": 1,
        "v": 1
      }
    },
    "tag": {
      "force": {
        "tag_id": "force",
        "name": "force",
        "explanation": "Theories and concepts related to forces, including gravitational, electromagnetic, and nuclear forces",
        "c": 1,
        "v": 1
      },
      "gravity": {
        "tag_id": "gravity",
        "name": "gravity",
        "explanation": "Theories and phenomena related to gravitational interactions",
        "c": 1,
        "v": 1
      },
      "spacetime": {
        "tag_id": "spacetime",
        "name": "spacetime",
        "explanation": "Concepts related to the four-dimensional fabric of space and time",
        "c": 1,
        "v": 1
      },
      "time": {
        "tag_id": "time",
        "name": "time",
        "explanation": "Concepts related to time, time evolution, and temporal dynamics",
        "c": 1,
        "v": 1
      }
    }
  }
};

state_pages = [
    ('alabama-gpa-calculator', 'Alabama GPA Calculator', 'Alabama', 'https://www.ache.edu/'),
    ('alaska-gpa-calculator', 'Alaska GPA Calculator', 'Alaska', 'https://www.alaska.edu/'),
    ('arizona-gpa-calculator', 'Arizona GPA Calculator', 'Arizona', 'https://www.azregents.edu/'),
    ('arkansas-gpa-calculator', 'Arkansas GPA Calculator', 'Arkansas', 'https://adhe.edu/'),
    ('california-gpa-calculator', 'California GPA Calculator', 'California', 'https://www.csac.ca.gov/'),
    ('colorado-gpa-calculator', 'Colorado GPA Calculator', 'Colorado', 'https://highered.colorado.gov/'),
    ('connecticut-gpa-calculator', 'Connecticut GPA Calculator', 'Connecticut', 'https://www.ctohe.org/'),
    ('delaware-gpa-calculator', 'Delaware GPA Calculator', 'Delaware', 'https://dhec.delaware.gov/'),
    ('florida-gpa-calculator', 'Florida GPA Calculator', 'Florida', 'https://www.flbog.edu/'),
    ('georgia-gpa-calculator', 'Georgia GPA Calculator', 'Georgia', 'https://www.usg.edu/'),
    ('hawaii-gpa-calculator', 'Hawaii GPA Calculator', 'Hawaii', 'https://www.hawaii.edu/'),
    ('idaho-gpa-calculator', 'Idaho GPA Calculator', 'Idaho', 'https://www.idahoboardofed.org/'),
    ('illinois-gpa-calculator', 'Illinois GPA Calculator', 'Illinois', 'https://www.ibhe.org/'),
    ('indiana-gpa-calculator', 'Indiana GPA Calculator', 'Indiana', 'https://www.in.gov/che/'),
    ('iowa-gpa-calculator', 'Iowa GPA Calculator', 'Iowa', 'https://iowacollegeaid.gov/'),
    ('kansas-gpa-calculator', 'Kansas GPA Calculator', 'Kansas', 'https://www.kansasregents.org/'),
    ('kentucky-gpa-calculator', 'Kentucky GPA Calculator', 'Kentucky', 'https://cpe.ky.gov/'),
    ('louisiana-gpa-calculator', 'Louisiana GPA Calculator', 'Louisiana', 'https://www.louisianahighered.org/'),
    ('maine-gpa-calculator', 'Maine GPA Calculator', 'Maine', 'https://www.maine.gov/education/highered'),
    ('maryland-gpa-calculator', 'Maryland GPA Calculator', 'Maryland', 'https://www.mhec.maryland.gov/'),
    ('massachusetts-gpa-calculator', 'Massachusetts GPA Calculator', 'Massachusetts', 'https://www.mass.edu/'),
    ('michigan-gpa-calculator', 'Michigan GPA Calculator', 'Michigan', 'https://www.michigan.gov/mistudentaid'),
    ('minnesota-gpa-calculator', 'Minnesota GPA Calculator', 'Minnesota', 'https://www.mhec.state.mn.us/'),
    ('mississippi-gpa-calculator', 'Mississippi GPA Calculator', 'Mississippi', 'https://www.mississippi.edu/'),
    ('missouri-gpa-calculator', 'Missouri GPA Calculator', 'Missouri', 'https://dhewd.mo.gov/'),
    ('montana-gpa-calculator', 'Montana GPA Calculator', 'Montana', 'https://mus.edu/'),
    ('nebraska-gpa-calculator', 'Nebraska GPA Calculator', 'Nebraska', 'https://www.ccpe.nebraska.gov/'),
    ('nevada-gpa-calculator', 'Nevada GPA Calculator', 'Nevada', 'https://www.nevada.edu/'),
    ('new-hampshire-gpa-calculator', 'New Hampshire GPA Calculator', 'New Hampshire', 'https://www.nh.gov/nhes/'),
    ('new-jersey-gpa-calculator', 'New Jersey GPA Calculator', 'New Jersey', 'https://www.nj.gov/highereducation/'),
    ('new-mexico-gpa-calculator', 'New Mexico GPA Calculator', 'New Mexico', 'https://hed.state.nm.us/'),
    ('new-york-gpa-calculator', 'New York GPA Calculator', 'New York', 'https://www.nysed.gov/'),
    ('north-carolina-gpa-calculator', 'North Carolina GPA Calculator', 'North Carolina', 'https://www.northcarolina.edu/'),
    ('north-dakota-gpa-calculator', 'North Dakota GPA Calculator', 'North Dakota', 'https://www.ndus.edu/'),
    ('ohio-gpa-calculator', 'Ohio GPA Calculator', 'Ohio', 'https://www.ohiohighered.org/'),
    ('oklahoma-gpa-calculator', 'Oklahoma GPA Calculator', 'Oklahoma', 'https://www.okhighered.org/'),
    ('oregon-gpa-calculator', 'Oregon GPA Calculator', 'Oregon', 'https://www.oregon.gov/highered/Pages/index.aspx'),
    ('pennsylvania-gpa-calculator', 'Pennsylvania GPA Calculator', 'Pennsylvania', 'https://www.pacollegetransfer.com/'),
    ('rhode-island-gpa-calculator', 'Rhode Island GPA Calculator', 'Rhode Island', 'https://www.uri.edu/'),
    ('south-carolina-gpa-calculator', 'South Carolina GPA Calculator', 'South Carolina', 'https://www.che.sc.gov/'),
    ('south-dakota-gpa-calculator', 'South Dakota GPA Calculator', 'South Dakota', 'https://www.sdbor.edu/'),
    ('tennessee-gpa-calculator', 'Tennessee GPA Calculator', 'Tennessee', 'https://www.tn.gov/thec.html'),
    ('texas-college-gpa-calculator', 'Texas College GPA Calculator', 'Texas', 'https://www.highered.texas.gov/'),
    ('utah-gpa-calculator', 'Utah GPA Calculator', 'Utah', 'https://www.higheredutah.org/'),
    ('vermont-gpa-calculator', 'Vermont GPA Calculator', 'Vermont', 'https://www.vtaffairs.org/'),
    ('virginia-gpa-calculator', 'Virginia GPA Calculator', 'Virginia', 'https://www.schev.edu/'),
    ('washington-gpa-calculator', 'Washington GPA Calculator', 'Washington', 'https://www.wsac.wa.gov/'),
    ('west-virginia-gpa-calculator', 'West Virginia GPA Calculator', 'West Virginia', 'https://www.wvhepc.edu/'),
    ('wisconsin-gpa-calculator', 'Wisconsin GPA Calculator', 'Wisconsin', 'https://www.wisconsin.edu/'),
    ('wyoming-gpa-calculator', 'Wyoming GPA Calculator', 'Wyoming', 'https://www.wiche.edu/'),
]

output_lines = ['CALCULATOR ENTRIES START']
for entry in state_pages:
    id_, name, state, url = entry
    title = f"{name} - Free GPA Calculator for {state} Students"
    meta = f"{name} helps students in {state} calculate their GPA with credit hours and grades. Free online tool optimized for state-specific academic planning."
    output_lines.append('  {')
    output_lines.append(f"    id: '{id_}',")
    output_lines.append(f"    name: '{name}',")
    output_lines.append(f"    title: '{title}',")
    output_lines.append(f"    metaDescription: '{meta}',")
    output_lines.append(f"    h1: '{name}',")
    output_lines.append(f"    h2: '{name} Tool',")
    output_lines.append(f"    description: 'The {name} provides state-specific GPA planning resources and a fast calculator for students in {state}.',")
    output_lines.append(f"    targetAudience: '{state} Students',")
    output_lines.append("    relatedCalculators: ['college-gpa-calculator', 'cumulative-gpa-calculator', 'semester-gpa-calculator', 'weighted-gpa-calculator', 'unweighted-gpa-calculator'],")
    output_lines.append('  },')
output_lines.append('CALCULATOR ENTRIES END')
output_lines.append('TEMPLATE ENTRIES START')
for entry in state_pages:
    id_, name, state, url = entry
    short = 'Texas College' if id_ == 'texas-college-gpa-calculator' else state
    output_lines.append('  {')
    output_lines.append(f"    id: '{id_}',")
    output_lines.append(f"    schoolName: '{name}',")
    output_lines.append(f"    shortName: '{short}',")
    output_lines.append(f"    location: '{state}',")
    output_lines.append(f"    strengths: 'strong regional academic support, state university systems, and transfer-friendly GPA policies in {state}',")
    output_lines.append('    externalLinks: [')
    output_lines.append(f"      {{ label: '{state} Higher Education Authority', url: '{url}' }},")
    output_lines.append("      { label: 'National Center for Education Statistics', url: 'https://nces.ed.gov/' },")
    output_lines.append("      { label: 'College Board', url: 'https://www.collegeboard.org/' },")
    output_lines.append('    ],')
    output_lines.append('  },')
output_lines.append('TEMPLATE ENTRIES END')

from pathlib import Path
Path('temp_state_entries_output_utf8.txt').write_text('\n'.join(output_lines), encoding='utf-8')

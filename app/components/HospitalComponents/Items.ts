
interface DropdownMenu {
    label: string;
    items: string[];
}

export const dropdownMenus: DropdownMenu[] = [
    {
        label: "Specialty Awards",
        items: [
            "Cardiology",
            "Gastroenterology",
            "Neurology",
            "Oncology",
            "Orthopedics"
        ]
    },
    {
        label: "Treatment Awards",
        items: [
            "Angioplasty",
            "Arthroscopy",
            "Back Pain Relief Surgery",
            "Blood Cancer Treatment",
            "Brain Surgery",
            "Breast Cancer Treatment",
            "Colorectal Cancer Treatment",
            "Colorectal Surgery",
            "Coronary Bypass",
            "GERD Surgery Treatment",
            "Heart Valve Replacement",
            "Hernia Repair",
            "Hip Replacement",
            "Lung Cancer Treatment",
            "Pacemaker or Defibrillator Placement",
            "Prostate Cancer Treatment",
            "Rotator Cuff Repair",
            "Skin Cancer Treatment",
            "Sleep Disorder",
            "Spinal Surgery",
            "Stent Placement",
            "Stomach Cancer Treatment"
        ]
    },
    {
        label: "Awards by Class",
        items: [
            "Elite Choice",
            "Patient Choice",
            "Provider Choice"
        ]
    }
];

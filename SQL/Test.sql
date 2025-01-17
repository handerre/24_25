-- 1. Opprett tabellen Poststed
CREATE TABLE Poststed (
    Postnummer VARCHAR(4) PRIMARY KEY, -- Postnummer som primærnøkkel
    Stedsnavn VARCHAR(50) NOT NULL    -- Navn på poststed
);
-- 2. Opprett tabellen Eier
CREATE TABLE Eier (
    EierID INT AUTO_INCREMENT PRIMARY KEY, -- EierID som primærnøkkel
    Fornavn VARCHAR(50) NOT NULL,          -- Eierens fornavn
    Etternavn VARCHAR(50) NOT NULL,        -- Eierens etternavn
    Adresse VARCHAR(100) NOT NULL,         -- Eierens adresse (uten postnummer)
    Postnummer VARCHAR(4),                 -- Fremmednøkkel til Poststed
    Telefonnummer VARCHAR(15),             -- Eierens telefonnummer
    Epost VARCHAR(100),                    -- Eierens epostadresse
    Fødselsdato DATE NOT NULL,             -- Eierens fødselsdato
    CONSTRAINT FK_Postnummer FOREIGN KEY (Postnummer)
        REFERENCES Poststed(Postnummer)    -- Fremmednøkkel-referanse til Poststed
);
-- 3. Opprett tabellen Bil
CREATE TABLE Bil (
    BilID INT AUTO_INCREMENT PRIMARY KEY,  -- BilID som primærnøkkel
    Registreringsnummer VARCHAR(10) UNIQUE NOT NULL, -- Unik bilregistrering
    Merke VARCHAR(50) NOT NULL,            -- Bilmerke (f.eks. Toyota)
    Modell VARCHAR(50) NOT NULL,           -- Bilmodell (f.eks. Corolla)
    År INT NOT NULL,                       -- Produksjonsår
    Farge VARCHAR(20),                     -- Farge på bilen
    Drivstofftype VARCHAR(20),             -- Drivstofftype (f.eks. Bensin)
    Kilometerstand INT                     -- Kilometerstand
);
-- 4. Opprett tabellen Eier-Bil
CREATE TABLE Eier_Bil (
    EierBilID INT AUTO_INCREMENT PRIMARY KEY, -- Eier-Bil-ID som primærnøkkel
    EierID INT,                               -- Fremmednøkkel til Eier
    BilID INT,                                -- Fremmednøkkel til Bil
    EierskapStartDato DATE NOT NULL,          -- Startdato for eierskap
    EierskapSluttDato DATE,                   -- Sluttdato for eierskap
    CONSTRAINT FK_EierID FOREIGN KEY (EierID)
        REFERENCES Eier(EierID) ON DELETE CASCADE, -- Fremmednøkkel-referanse til Eier
    CONSTRAINT FK_BilID FOREIGN KEY (BilID)
        REFERENCES Bil(BilID) ON DELETE CASCADE   -- Fremmednøkkel-referanse til Bil
);

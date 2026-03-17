-- Bundesliga 2023/24 Season Database
-- Created: March 17, 2026
-- Source: Transfermarkt

-- Teams Table
CREATE TABLE teams (
    team_id INTEGER PRIMARY KEY,
    team_name VARCHAR(100) NOT NULL,
    short_name VARCHAR(50),
    city VARCHAR(50),
    stadium VARCHAR(100)
);

-- Insert Teams (18 Bundesliga clubs 2023/24)
INSERT INTO teams (team_id, team_name, short_name, city) VALUES
(1, 'Bayer 04 Leverkusen', 'Leverkusen', 'Leverkusen'),
(2, 'VfB Stuttgart', 'Stuttgart', 'Stuttgart'),
(3, 'Bayern Munich', 'Bayern', 'Munich'),
(4, 'RB Leipzig', 'Leipzig', 'Leipzig'),
(5, 'Borussia Dortmund', 'Dortmund', 'Dortmund'),
(6, 'Eintracht Frankfurt', 'Frankfurt', 'Frankfurt'),
(7, 'TSG 1899 Hoffenheim', 'Hoffenheim', 'Sinsheim'),
(8, 'SC Freiburg', 'Freiburg', 'Freiburg'),
(9, 'FC Augsburg', 'Augsburg', 'Augsburg'),
(10, '1.FC Union Berlin', 'Union Berlin', 'Berlin'),
(11, 'SV Werder Bremen', 'Werder Bremen', 'Bremen'),
(12, 'Borussia Mönchengladbach', 'Gladbach', 'Mönchengladbach'),
(13, '1.FSV Mainz 05', 'Mainz', 'Mainz'),
(14, 'VfL Wolfsburg', 'Wolfsburg', 'Wolfsburg'),
(15, '1.FC Köln', 'Köln', 'Cologne'),
(16, 'VfL Bochum', 'Bochum', 'Bochum'),
(17, '1.FC Heidenheim 1846', 'Heidenheim', 'Heidenheim'),
(18, 'SV Darmstadt 98', 'Darmstadt', 'Darmstadt');

-- Matches Table
CREATE TABLE matches (
    match_id INTEGER PRIMARY KEY,
    matchday INTEGER NOT NULL,
    match_date DATE NOT NULL,
    match_time TIME,
    home_team_id INTEGER NOT NULL,
    away_team_id INTEGER NOT NULL,
    home_goals INTEGER DEFAULT 0,
    away_goals INTEGER DEFAULT 0,
    referee VARCHAR(100),
    attendance INTEGER,
    FOREIGN KEY (home_team_id) REFERENCES teams(team_id),
    FOREIGN KEY (away_team_id) REFERENCES teams(team_id)
);

-- Goals Table (with timestamps)
CREATE TABLE goals (
    goal_id INTEGER PRIMARY KEY,
    match_id INTEGER NOT NULL,
    player_name VARCHAR(100) NOT NULL,
    team_id INTEGER NOT NULL,
    goal_minute INTEGER NOT NULL,
    goal_type VARCHAR(20) DEFAULT 'regular', -- regular, penalty, own_goal
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id)
);

-- Final Table (Matchday 34 - May 18, 2024)
-- Match 1: Hoffenheim vs Bayern Munich
INSERT INTO matches (match_id, matchday, match_date, match_time, home_team_id, away_team_id, home_goals, away_goals, referee, attendance) 
VALUES (306, 34, '2024-05-18', '15:30', 7, 3, 4, 2, 'Marco Fritz', 30150);

INSERT INTO goals (goal_id, match_id, player_name, team_id, goal_minute, goal_type) VALUES
(1, 306, 'Mathys Tel', 3, 4, 'regular'),
(2, 306, 'Alphonso Davies', 3, 6, 'regular'),
(3, 306, 'Maximilian Beier', 7, 8, 'regular'),
(4, 306, 'Andrej Kramaric', 7, 68, 'regular'),
(5, 306, 'Andrej Kramaric', 7, 85, 'regular'),
(6, 306, 'Andrej Kramaric', 7, 87, 'regular');

-- Match 2: Frankfurt vs RB Leipzig
INSERT INTO matches (match_id, matchday, match_date, match_time, home_team_id, away_team_id, home_goals, away_goals, referee, attendance) 
VALUES (305, 34, '2024-05-18', '15:30', 6, 4, 2, 2, 'Felix Zwayer', 57500);

INSERT INTO goals (goal_id, match_id, player_name, team_id, goal_minute, goal_type) VALUES
(7, 305, 'Xavi Simons', 4, 42, 'penalty'),
(8, 305, 'Benjamin Sesko', 4, 46, 'regular'),
(9, 305, 'Hugo Ekitiké', 6, 60, 'regular'),
(10, 305, 'Omar Marmoush', 6, 77, 'penalty');

-- Match 3: Union Berlin vs SC Freiburg
INSERT INTO matches (match_id, matchday, match_date, match_time, home_team_id, away_team_id, home_goals, away_goals, referee, attendance) 
VALUES (304, 34, '2024-05-18', '15:30', 10, 8, 2, 1, 'Christian Dingert', 22012);

INSERT INTO goals (goal_id, match_id, player_name, team_id, goal_minute, goal_type) VALUES
(11, 304, 'Benedict Hollerbach', 10, 68, 'regular'),
(12, 304, 'Ritsu Doan', 8, 85, 'regular'),
(13, 304, 'Janik Haberer', 10, 92, 'regular');

-- Match 4: Wolfsburg vs Mainz
INSERT INTO matches (match_id, matchday, match_date, match_time, home_team_id, away_team_id, home_goals, away_goals, referee, attendance) 
VALUES (303, 34, '2024-05-18', '15:30', 14, 13, 1, 3, 'Frank Willenborg', 26627);

INSERT INTO goals (goal_id, match_id, player_name, team_id, goal_minute, goal_type) VALUES
(14, 303, 'Kevin Paredes', 14, 18, 'regular'),
(15, 303, 'Brajan Gruda', 13, 24, 'regular'),
(16, 303, 'Sepp van den Berg', 13, 71, 'regular'),
(17, 303, 'Jonathan Burkardt', 13, 85, 'regular');

-- Match 5: Stuttgart vs Gladbach
INSERT INTO matches (match_id, matchday, match_date, match_time, home_team_id, away_team_id, home_goals, away_goals, referee, attendance) 
VALUES (302, 34, '2024-05-18', '15:30', 2, 12, 4, 0, 'Daniel Schlager', 60058);

INSERT INTO goals (goal_id, match_id, player_name, team_id, goal_minute, goal_type) VALUES
(18, 302, 'Serhou Guirassy', 2, 23, 'regular'),
(19, 302, 'Serhou Guirassy', 2, 31, 'regular'),
(20, 302, 'Woo-yeong Jeong', 2, 75, 'regular'),
(21, 302, 'Silas', 2, 83, 'regular');

-- Match 6: Heidenheim vs Köln
INSERT INTO matches (match_id, matchday, match_date, match_time, home_team_id, away_team_id, home_goals, away_goals, referee, attendance) 
VALUES (301, 34, '2024-05-18', '15:30', 17, 15, 4, 1, 'Tobias Welz', 15000);

INSERT INTO goals (goal_id, match_id, player_name, team_id, goal_minute, goal_type) VALUES
(22, 301, 'Eren Dinkçi', 17, 16, 'regular'),
(23, 301, 'Eren Dinkçi', 17, 22, 'regular'),
(24, 301, 'Kevin Sessa', 17, 36, 'regular'),
(25, 301, 'Steffen Tigges', 15, 64, 'regular'),
(26, 301, 'Niklas Beste', 17, 78, 'regular');

-- Match 7: Werder Bremen vs Bochum
INSERT INTO matches (match_id, matchday, match_date, match_time, home_team_id, away_team_id, home_goals, away_goals, referee, attendance) 
VALUES (300, 34, '2024-05-18', '15:30', 11, 16, 4, 1, 'Martin Petersen', 42100);

INSERT INTO goals (goal_id, match_id, player_name, team_id, goal_minute, goal_type) VALUES
(27, 300, 'Marco Friedl', 11, 6, 'regular'),
(28, 300, 'Anthony Jung', 11, 78, 'regular'),
(29, 300, 'Jens Stage', 11, 80, 'regular'),
(30, 300, 'Christopher Antwi-Adjei', 16, 85, 'regular'),
(31, 300, 'Romano Schmid', 11, 87, 'regular');

-- Match 8: Leverkusen vs Augsburg
INSERT INTO matches (match_id, matchday, match_date, match_time, home_team_id, away_team_id, home_goals, away_goals, referee, attendance) 
VALUES (299, 34, '2024-05-18', '15:30', 1, 9, 2, 1, 'Dr. Matthias Jöllenbeck', 30210);

INSERT INTO goals (goal_id, match_id, player_name, team_id, goal_minute, goal_type) VALUES
(32, 299, 'Victor Boniface', 1, 12, 'regular'),
(33, 299, 'Robert Andrich', 1, 27, 'regular'),
(34, 299, 'Mert Kömür', 9, 62, 'regular');

-- Match 9: Dortmund vs Darmstadt
INSERT INTO matches (match_id, matchday, match_date, match_time, home_team_id, away_team_id, home_goals, away_goals, referee, attendance) 
VALUES (298, 34, '2024-05-18', '15:30', 5, 18, 4, 0, 'Tobias Stieler', 81365);

-- Note: Full season data requires scraping all 34 matchdays
-- This is a sample of Matchday 34 (final matchday)

-- Sample Queries:

-- Get all matches with team names
SELECT 
    m.match_id,
    m.matchday,
    m.match_date,
    t1.team_name as home_team,
    t2.team_name as away_team,
    m.home_goals,
    m.away_goals,
    m.referee
FROM matches m
JOIN teams t1 ON m.home_team_id = t1.team_id
JOIN teams t2 ON m.away_team_id = t2.team_id
ORDER BY m.match_date, m.match_time;

-- Get all goals with match details
SELECT 
    g.goal_id,
    m.match_date,
    t.team_name as scoring_team,
    g.player_name,
    g.goal_minute,
    g.goal_type
FROM goals g
JOIN matches m ON g.match_id = m.match_id
JOIN teams t ON g.team_id = t.team_id
ORDER BY m.match_date, g.goal_minute;

-- Get final league table (simplified - would need all matchdays)
SELECT 
    t.team_name,
    COUNT(*) as matches_played,
    SUM(CASE WHEN (m.home_team_id = t.team_id AND m.home_goals > m.away_goals) 
              OR (m.away_team_id = t.team_id AND m.away_goals > m.home_goals) THEN 1 ELSE 0 END) as wins,
    SUM(CASE WHEN m.home_goals = m.away_goals THEN 1 ELSE 0 END) as draws,
    SUM(CASE WHEN (m.home_team_id = t.team_id AND m.home_goals < m.away_goals) 
              OR (m.away_team_id = t.team_id AND m.away_goals < m.home_goals) THEN 1 ELSE 0 END) as losses,
    SUM(CASE WHEN m.home_team_id = t.team_id THEN m.home_goals ELSE m.away_goals END) as goals_for,
    SUM(CASE WHEN m.home_team_id = t.team_id THEN m.away_goals ELSE m.home_goals END) as goals_against
FROM teams t
LEFT JOIN matches m ON t.team_id = m.home_team_id OR t.team_id = m.away_team_id
WHERE m.match_id IS NOT NULL
GROUP BY t.team_id, t.team_name
ORDER BY (wins * 3 + draws) DESC, (goals_for - goals_against) DESC;

-- Get top scorers (sample from matchday 34)
SELECT 
    player_name,
    team_id,
    COUNT(*) as goals
FROM goals
GROUP BY player_name, team_id
ORDER BY goals DESC;

-- Get matches with most goals
SELECT 
    m.match_id,
    m.match_date,
    t1.team_name as home_team,
    t2.team_name as away_team,
    m.home_goals,
    m.away_goals,
    (m.home_goals + m.away_goals) as total_goals
FROM matches m
JOIN teams t1 ON m.home_team_id = t1.team_id
JOIN teams t2 ON m.away_team_id = t2.team_id
ORDER BY total_goals DESC;
